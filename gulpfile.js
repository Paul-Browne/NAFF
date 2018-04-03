var gulp           = require('gulp');
var scss           = require('gulp-sass');
var less           = require('gulp-less');
var image          = require('gulp-image');
var uglify         = require('gulp-uglify');
var gulpIgnore     = require('gulp-ignore');
var cssnano        = require('gulp-cssnano');
var htmlmin        = require('gulp-htmlmin');
var changed        = require('gulp-changed');
//var changedInPlace = require('gulp-changed-in-place');
var imageResize    = require('gulp-image-resize');
var autoprefixer   = require('gulp-autoprefixer');
var prettify       = require('gulp-jsbeautifier');
var runSequence    = require('run-sequence');
var serveStatic    = require('serve-static');
var compression    = require('compression');
var fs             = require('file-system');
var sizeOf         = require('image-size');
var express        = require('express');
var http           = require('http');
var http2          = require('spdy');
var del            = require('del');
var opn            = require('opn');
var useref         = require('gulp-useref');


require('dotenv').config();


var imgPrefs = {
    pngquant: true,
    optipng: false,
    zopflipng: true,
    jpegRecompress: false,
    mozjpeg: true,
    guetzli: false,
    gifsicle: false,
    svgo: true,
    concurrent: 10
};

// https server with gzip and http2 (only if cert and key exist)

gulp.task('server', function(){
    fs.open('./.env', 'r', (err) => {
        if(err){
            if (err.code === 'ENOENT') {
                console.log('.env file not found');
                console.log("https://localhost:8888 only available when ssl cert and key are found");
                console.log("http://localhost:8888 in use");

                var dist = express();
                dist.use(compression())
                dist.use(serveStatic('./dist', {
                    'extensions': ['html'],
                    'maxAge': 3600000
                }))
                var disthttpsServer = http.createServer(dist);
                disthttpsServer.listen(8888);

                var dev = express();
                dev.use(compression())
                dev.use(serveStatic('./dev', {
                    'extensions': ['html'],
                    'maxAge': 3600000
                }))
                var devhttpsServer = http.createServer(dev);
                devhttpsServer.listen(8887);

                var styleguide = express();
                styleguide.use(compression())
                styleguide.use(serveStatic('./styleguide', {
                    'extensions': ['html'],
                    'maxAge': 3600000
                }))
                var styleguidehttpsServer = http.createServer(styleguide);
                styleguidehttpsServer.listen(8889);
            }
        } else {
            fs.readFile('./.env', 'utf8', (err, data) => {
                if( data.indexOf('SSL_CRT_PATH') < 0 || data.indexOf('SSL_KEY_PATH') < 0 ){
                    if(data.indexOf('SSL_CRT_PATH') < 0 ){
                        console.log("no 'SSL_CRT_PATH' found in .env file");
                    }
                    if(data.indexOf('SSL_KEY_PATH') < 0 ){
                        console.log("no 'SSL_KEY_PATH' found in .env file");
                    }
                    console.log("https://localhost:8888 only available when ssl cert and key are found");
                    console.log("http://localhost:8888 in use");
                    var dist = express();
                    dist.use(compression())
                    dist.use(serveStatic('./dist', {
                        'extensions': ['html'],
                        'maxAge': 3600000
                    }))
                    var disthttpsServer = http.createServer(dist);
                    disthttpsServer.listen(8888);
                    opn('http://localhost:8888');

                    var dev = express();
                    dev.use(compression())
                    dev.use(serveStatic('./dev', {
                        'extensions': ['html'],
                        'maxAge': 3600000
                    }))
                    var devhttpsServer = http.createServer(dev);
                    devhttpsServer.listen(8887);
                    opn('http://localhost:8887');

                    var styleguide = express();
                    styleguide.use(compression())
                    styleguide.use(serveStatic('./styleguide', {
                        'extensions': ['html'],
                        'maxAge': 3600000
                    }))
                    var styleguidehttpsServer = http.createServer(styleguide);
                    styleguidehttpsServer.listen(8889);
                    opn('http://localhost:8889');
                } else {
                    sslCrt = process.env.HOME + process.env.SSL_CRT_PATH
                    sslKey = process.env.HOME + process.env.SSL_KEY_PATH
                    var privateKey  = fs.readFileSync(sslKey, 'utf8');
                    var certificate = fs.readFileSync(sslCrt, 'utf8');
                    var credentials = {key: privateKey, cert: certificate};
                    var dist = express();
                    dist.use(compression())
                    dist.use(serveStatic('./dist', {
                        'extensions': ['html'],
                        'maxAge': 3600000
                    }))
                    var disthttpsServer = http2.createServer(credentials, dist);

                    disthttpsServer.listen(8888);
                    console.log("https://localhost:8888");
                    //opn('https://localhost:8888');

                    var dev = express();
                    dev.use(compression())
                    dev.use(serveStatic('./dev', {
                        'extensions': ['html'],
                        'maxAge': 3600000
                    }))
                    var devhttpsServer = http2.createServer(credentials, dev);
                    devhttpsServer.listen(8887);
                    console.log("https://localhost:8887");
                    //opn('https://localhost:8887');

                    var styleguide = express();
                    styleguide.use(compression())
                    styleguide.use(serveStatic('./styleguide', {
                        'extensions': ['html'],
                        'maxAge': 3600000
                    }))
                    var styleguidehttpsServer = http2.createServer(credentials, styleguide);
                    styleguidehttpsServer.listen(8889);
                    console.log("https://localhost:8889");
                    //opn('https://localhost:8887');
                }
            })
        }
    })
})


var message = function(file) {
    console.log(file.path);
    return false;
}



// less compilation + minification

gulp.task('less', function () {
  return gulp.src('src/**/*.less')
    .pipe(changed('dist', {extension: '.css'}))
    .pipe(gulpIgnore(message))
    .pipe(less())
    .pipe( autoprefixer({
            browsers: ['>1%'],
            cascade: false
    }))
    .pipe(gulp.dest('dev'))
    //.pipe(gulp.dest('styleguide/css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist'))
})

// scss compilation + minification

gulp.task('scss', function () {
  return gulp.src('src/**/*.scss')
    .pipe(changed('dist', {extension: '.css'}))
    .pipe(gulpIgnore(message))
    .pipe(scss())
    .pipe(autoprefixer({
            browsers: ['>1%'],
            cascade: false
    }))
    .pipe(gulp.dest('dev'))
    //.pipe(gulp.dest('styleguide/css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist'))
})

// css minification

gulp.task('css', function() {
  return gulp.src('src/**/*.css')
    .pipe(changed('dist'))
    .pipe(gulpIgnore(message))
    .pipe(autoprefixer({
    browsers: ['>1%'],
    cascade: false
    }))
    .pipe(gulp.dest('dev'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist'))
})

// js minification + uglification

gulp.task('js', function() {
  return gulp.src('src/**/*.js')
  .pipe(changed('dist'))
  .pipe(gulpIgnore(message))
  .pipe(gulp.dest('dev'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
})

// image optimization

gulp.task('images', function() {
  return gulp.src('src/**/*.{png,jpg,jpeg,gif,svg}')
  .pipe(changed('dist'))
  .pipe(gulpIgnore(message))
  .pipe(image(imgPrefs))
  .pipe(gulp.dest('dist'))
  .pipe(gulp.dest('dev'))
})

// html minification

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
  .pipe(changed('dist'))
  .pipe(gulpIgnore(message))
  .pipe(gulp.dest('dev'))
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true
  }))
  .pipe(gulp.dest('dist'))
})

// useref test

gulp.task('combine', function(){
    return gulp.src('dist/**/*.html')
    .pipe(useref())
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
    }))
    .pipe(gulp.dest('dist'))
})

// copy everything else

gulp.task('other', function() {
  return gulp.src(['src/**/*.*', '!src/**/*.html', '!src/**/*.css', '!src/**/*.js', '!src/**/*.less', '!src/**/*.scss', '!src/**/*.png', '!src/**/*.jpg', '!src/**/*.jpeg', '!src/**/*.gif', '!src/**/*.svg' ])
  .pipe(changed('dist'))
  .pipe(gulpIgnore(message))
  .pipe(gulp.dest('dev'))
  .pipe(gulp.dest('dist'))
})


// Cleaning

gulp.task('clean', function() {
  return del.sync(['dist', 'dev'])
})

gulp.task('clean:dev', function() {
  return del.sync('dev')
})

gulp.task('clean:dist', function() {
  return del.sync('dist')
})

gulp.task('clean:code', function() {
  return del.sync(['dist/**/*.*', '!dist/**/*.png', '!dist/**/*.jpg', '!dist/**/*.jpeg', '!dist/**/*.gif', '!dist/**/*.svg', 'dev/**/*.*', '!dev/**/*.png', '!dev/**/*.jpg', '!dev/**/*.jpeg', '!dev/**/*.gif', '!dev/**/*.svg'])
})


// Prettify css js html

gulp.task('prettify:dev', function() {
  return gulp.src('dev/**/*.+(html|css|js|less|scss)')
    .pipe(prettify())
    .pipe(gulp.dest('dev'))
})

gulp.task('prettify:src', function() {
  return gulp.src('src/**/*.+(html|css|js|less|scss)')
    .pipe(prettify())
    .pipe(gulp.dest('src'))
})




/* TODO optimize */


var lessThan400 = function (file) {
    if(sizeOf(file.path).width <= 400) {
        return true;
    }else{
        return false;
    }
};
var lessThan800 = function (file) {
    if(sizeOf(file.path).width <= 800) {
        return true;
    }else{
        return false;
    }
};
var lessThan1200 = function (file) {
    if(sizeOf(file.path).width <= 1200) {
        return true;
    }else{
        return false;
    }
};
var lessThan1600 = function (file) {
    if(sizeOf(file.path).width <= 1600) {
        return true;
    }else{
        return false;
    }
};
var lessThan2000 = function (file) {
    if(sizeOf(file.path).width <= 2000) {
        return true;
    }else{
        return false;
    }
};
var lessThan2400 = function (file) {
    if(sizeOf(file.path).width <= 2400) {
        return true;
    }else{
        return false;
    }
};





gulp.task('resize400', function() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png,gif}')
    .pipe(changed('dist/images/400'))
    .pipe(gulpIgnore(lessThan400))
    .pipe(imageResize({
      width : 400
    }))
    .pipe(image(imgPrefs))
    .pipe(gulp.dest('dev/images/400'))
    .pipe(gulp.dest('dist/images/400'))
})

gulp.task('resize800', function() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png,gif}')
    .pipe(changed('dist/images/800'))
    .pipe(gulpIgnore(lessThan800))
    .pipe(imageResize({
      width : 800
    }))
    .pipe(image(imgPrefs))
    .pipe(gulp.dest('dev/images/800'))
    .pipe(gulp.dest('dist/images/800'))
})

gulp.task('resize1200', function() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png,gif}')
    .pipe(changed('dist/images/1200'))
    .pipe(gulpIgnore(lessThan1200))
    .pipe(imageResize({
      width : 1200
    }))
    .pipe(image(imgPrefs))
    .pipe(gulp.dest('dev/images/1200'))
    .pipe(gulp.dest('dist/images/1200'))
})

gulp.task('resize1600', function() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png,gif}')
    .pipe(changed('dist/images/1600'))
    .pipe(gulpIgnore(lessThan1600))
    .pipe(imageResize({
      width : 1600
    }))
    .pipe(image(imgPrefs))
    .pipe(gulp.dest('dev/images/1600'))
    .pipe(gulp.dest('dist/images/1600'))
})

gulp.task('resize2000', function() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png,gif}')
    .pipe(changed('dist/images/2000'))
    .pipe(gulpIgnore(lessThan2000))
    .pipe(imageResize({
      width : 2000
    }))
    .pipe(image(imgPrefs))
    .pipe(gulp.dest('dev/images/2000'))
    .pipe(gulp.dest('dist/images/2000'))
})

gulp.task('resize2400', function() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png,gif}')
    .pipe(changed('dist/images/2400'))
    .pipe(gulpIgnore(lessThan2400))
    .pipe(imageResize({
      width : 2400
    }))
    .pipe(image(imgPrefs))
    .pipe(gulp.dest('dev/images/2400'))
    .pipe(gulp.dest('dist/images/2400'))
})

gulp.task('resize', function(callback) {
  runSequence(
    'resize2400',
    'resize2000',
    'resize1600',
    'resize1200',
    'resize800',
    'resize400',
    callback
  )
})

// Build

gulp.task('build', function(callback) {
  runSequence(
    'less',
    'scss',
    'css',
    'js',
    'images',
    'resize',
    'html',
    'combine',
    'other',
    'prettify:dev',
    callback
  )
})

// Watch

gulp.task('watch', function() {
    gulp.watch('src/**/*', ['build'])
})

// Gulp - Build + Watch + start-servers

gulp.task('default', function(callback) {
  runSequence(
    'build',
    'watch',
    'server',
    callback
  )
})
