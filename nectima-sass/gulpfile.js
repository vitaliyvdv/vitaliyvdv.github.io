/*
Для начала работы с новым проектом необходимо скопировать файлы gulpfile.js и package.json в папку с пректом.
Далее в папке с проектом необходимо запустить консоль и в консоли набрать npm up

Завершение сеанса gulp - Ctrl+С и нажать клавишу Y
*/

// подключаем модули gulp

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass');
    cleancss = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    clean = require('gulp-clean'),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    gzip = require("gulp-gzip"),
    plumber = require("gulp-plumber"),
    newer = require('gulp-newer'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

// прописываем пути для файлов

var path = {
    build: { // Указываем куда складывать готовые после сборки файлы
        html: './',
        jsscripts: 'js/min/',
        css: 'css/'
    },
    src: { // Пути откуда брать исходники
        html: 'templates/[^_]*.html',
        jsscripts: ['!js/adv/*', '!js/core/*', '!js/plugins/*', '!js/min/**/*', '!js/min/core.js', '!js/min/plugins.js', 'js/**/[^_]*.js'],
        style: 'sass/[^_]*.scss',
    },
    watch: { // Указываем, за изменением каких файлов необходимо наблюдать
        html: 'templates/**/*.html',
        jsscripts: 'js/[^_]*.js',
        style: 'sass/[^_]*.scss'
    }
};

var config = {
    server: {
        baseDir: "./"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('webserver', function() {
    browserSync(config);
});

gulp.task('html:build', function() {
    gulp.src(path.src.html)
        //.pipe(newer(path.build.html))
        .pipe(rigger()) // Прогоним через rigger
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({ stream: true }));
});

gulp.task('js:scripts', function() {
    gulp.src(path.src.jsscripts)
        .pipe(newer(path.build.jsscripts))
        .pipe(sourcemaps.init()) // Инициализируем sourcemap
        .pipe(plumber()) // проверяем ошибки
        .pipe(uglify()) // Сожмем наш js
        .pipe(plumber.stop())
        .pipe(sourcemaps.write('../../maps/js', { addComment: false })) // Пропишем карты
        .pipe(gulp.dest(path.build.jsscripts)) // Выплюнем готовый файл
        .pipe(reload({ stream: true })); // И перезагрузим сервер
});

gulp.task('style:build', function() {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init()) // Инициализируем sourcemap
        .pipe(sass().on('error', sass.logError))
        .pipe(cleancss({ compatibility: 'ie8' }))
        .pipe(sourcemaps.write('../maps/css', { addComment: false })) // Пропишем карты
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream: true }));
});

// определим таск с именем «build», который будет запускать все таски:

gulp.task('build', [
    'html:build',
    'js:scripts',
    'style:build'
]);

// отслеживать изменения в файлах

gulp.task('watch', function() {

    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.jsscripts], function(event, cb) {
        gulp.start('js:scripts');
    });
});

//gulp.task('default', ['build', 'watch', 'webserver']);
gulp.task('default', ['build', 'watch']);