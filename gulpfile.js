const gulp = require('gulp');
const babel = require('gulp-babel');

// gulp.task('default', ['praise'], () =>
//     gulp.watch(['src/**/*.es6', '!src/public/*/*.es6'],['praise'])
// );

gulp.task('default', () => {
    return gulp.src(['src/**/*.es6', '!src/public/*/*.es6'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./build'))
});