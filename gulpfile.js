// 引入 gulp
var gulp = require('gulp');
var path=".";


// 引入组件
var rename = require('gulp-rename');
var spritesmith = require('gulp.spritesmith');


//精灵图生成
gulp.task('sprite', function () {
  var spriteData = gulp.src(path+'/images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest(path+'/sprite/'));
});

// 默认任务
gulp.task('default', function(){
    var allOptions=['sprite'];
    gulp.run(allOptions);


    // 监听文件变化
    gulp.watch([path+'/images/*.png'], function(e){
        var fileType = e.path.substr(e.path.lastIndexOf(".")).toLowerCase();
        var filePath = e.path.split("\\");

        switch (fileType) {
          case ".html":gulp.run('minifycss');break;

          case ".js":gulp.run('lint','scripts');break;

          case ".less":gulp.run('less');break;

          case ".css":gulp.run('minifycss');break;

          case ".png":gulp.run('sprite'); break;

          default:console.log("not an important change...");break;
        }
    }).on("change",function(e){
        console.log(e.path+" changed");
    });
});
