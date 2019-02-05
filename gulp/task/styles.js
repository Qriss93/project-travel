let gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  nasted = require("postcss-nested"),
  cssvar = require("postcss-simple-vars"),
  autoprefix = require("autoprefixer"),
  cssImport = require("postcss-import"),
  mixins = require("postcss-mixins");

gulp.task("styles", function() {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, cssvar, nasted, autoprefix]))
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
