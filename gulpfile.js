var gulp = require("gulp");
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');

gulp.task("default", function() {
    return [
        gulp.src([ "./src/texteditor/*.ts", "./lib/*.ts" ])
            .pipe(sourcemaps.init())
            .pipe(typescript({ target: "ES5", out: "texteditor.js" }))
            .pipe(uglify())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("./dist")),
        gulp.src("./src/css/*.ts")
            .pipe(sourcemaps.init())
            .pipe(typescript({ target: "ES5", out: "css.js" }))
            .pipe(uglify())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("./dist")),
        gulp.src("./src/javascript/*.ts")
            .pipe(sourcemaps.init())
            .pipe(typescript({ target: "ES5", out: "javascript.js" }))
            .pipe(uglify())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("./dist")),
        gulp.src("./src/html/*.ts")
            .pipe(sourcemaps.init())
            .pipe(typescript({ target: "ES5", out: "html.js" }))
            .pipe(uglify())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("./dist")),
        gulp.src([ "./samples/*.html" ])
            .pipe(gulp.dest("./dist"))
    ];
});