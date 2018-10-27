const gulp = require("gulp");
const p = require("gulp-load-plugins")();

const browserSync = require("browser-sync");

// Start the server
gulp.task("nsync", () => {
  browserSync({
    open: true,
    server: {
      baseDir: "./happy/birthday/",
      index: "jordine.html"
    }
  });
});

//Compile pug file
gulp.task("writin", () => {
  gulp
    .src("./dev/iloveevery.pug")
    .pipe(p.rename("jordine.html"))
    .pipe(p.pug())
    .pipe(gulp.dest("./happy/birthday/"))
    .pipe(browserSync.stream());
});

//Compile sass file
gulp.task("stylin", () => {
  gulp
    .src("./dev/aesthetics.scss")
    .pipe(p.sass().on("error", p.sass.logError))
    .pipe(p.autoprefixer())
    .pipe(gulp.dest("./happy/birthday"))
    .pipe(browserSync.stream());
});

gulp.task("codin", () => {
  gulp.src("./happy/birthday/magic.js").pipe(browserSync.stream());
});

//Default task
gulp.task("default", ["writin", "stylin", "nsync"], () => {
  gulp.watch("./dev/iloveevery.pug", ["writin"]);
  gulp.watch("./dev/aesthetics.scss", ["stylin"]);
  gulp.watch("./happy/birthday/magic.js", ["codin"]);
});
