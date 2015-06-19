var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('migrate-dev', shell.task([
    'sequelize db:migrate --env development --config config/db.config.json'
]));

gulp.task('rollback-dev', shell.task([
    'sequelize db:migrate:undo --env development --config config/db.config.json'
]));

gulp.task('migrate-prod', shell.task([
    'sequelize db:migrate --env production --config config/db.config.json'
]));

gulp.task('rollback-prod', shell.task([
    'sequelize db:migrate:undo --env production --config config/db.config.json'
]));
