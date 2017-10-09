/**
 * Created by Administrator on 2017/10/9.
 */
/*
var gulp=require("gulp"),
    concat=require("gulp-concat"),
    uglify=require("gulp-uglify"),
    rename=require("gulp-rename");
gulp.task("js",function(){
    gulp.src("js/!*.js")
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("js"))
});*/
var gulp=require("gulp"),
    rename=require("gulp-rename"),
    minifyCss=require("gulp-minify-css"),
    concat=require("gulp-concat"),
    notify=require("gulp-notify");
gulp.task("css",function(){
   gulp.src(["css/*.css"])
       .pipe(concat("main.css"))
       .pipe(rename({suffix:".min"}))
       .pipe(minifyCss())
       .pipe(gulp.dest("css/"))
       .pipe(notify({messafe:"OK!"}))
});