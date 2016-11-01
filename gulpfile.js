const gulp = require('gulp') //gulp
const del = require('del')//启动前删除文件
const sass = require('gulp-sass') //scss文件编译
const browserSync = require('browser-sync').create()//浏览器热更新
const concat = require('gulp-concat') //js文件合并
const uglify = require('gulp-uglify') //js文件压缩
const pump = require('pump') //js文件压缩需要
const rename = require('gulp-rename') //文件重命名
const imagesmin = require('gulp-imagemin') //图片压缩
const gulpSSH = require('gulp-ssh') //上传项目
const fs = require('fs')


//文件clean
gulp.task('clean',function () {
  return del(['dist'])
})

//编译scss文件
gulp.task('sass', function() {
        return gulp.src('./sass/*.scss')
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream());
    })

// gulp.task('sass:watch', function() {
//     gulp.watch('./sass/*.scss', ['sass'])
// })

//监听scss文件改动 启动浏览器 热更新
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});



//js文件合并
gulp.task('concat', function() {
    return gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'))
})

//js文件压缩
gulp.task('compass', function(cb) {
    pump([
            gulp.src('./js/*.js'),
            uglify(),
            gulp.dest('./dist/')
        ],
        cb
    )
})

//文件重名名
gulp.task('rename', function() {
    return gulp.src('./src/test.js')
        .pipe(rename(function(path) {
            path.dirname += './xxx'
            path.basename += 'xxx'
            path.extname += 'xxx'
            return path
        }))
        .pipe(gulp.dest('./dist'))
})

//图片压缩
gulp.task('imgsmin', function() {
    gulp.src('/src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
})

const config = {
    host: '192.168.0.1',
    port: 22,
    username: 'username',
    privateKey: fs.readFileSync('/Users/zensh/.ssh/id_rsa')
}

const gulpssh = new gulpSSH({
    ignoreErrors: false,
    sshConfig: config
})

//上传文件到服务器
gulp.task('dest', function() {
    return gulp.src(['./**/*.js', '!**/node_modules/**'])
        .pipe(gulpssh.dest('/home/test'))
})

//默认任务
gulp.task('default',['clean','serve','compass'])
