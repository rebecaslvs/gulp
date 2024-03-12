const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compilaSass() {
  return gulp.src("./source/styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build/styles"));
}

function funcaoPadrao(callback) {
  setTimeout(function () {
    console.log("Função padrão executada!");
    callback();
  }, 2000);
}

function dizOi(callback) {
  setTimeout(function () {
    console.log("Oi, mundo!");
    dizTchau();
    callback();
  }, 1000);
}

function dizTchau() {
  console.log("Tchau, mundo!");
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
