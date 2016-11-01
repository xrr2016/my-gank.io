const gulp = require('gulp') //gulp
const sass = require('gulp-sass') //scss文件编译
const concat = require('gulp-concat')//js文件合并
const uglify = require('gulp-uglify')//js文件压缩
const pump  = require('pump')//js文件压缩需要
const rename = require('gulp-rename')//文件重命名
const imagemin = require('gulp-imagemin')//图片压缩
const sftp = require('gulp-ssh')//上传项目
