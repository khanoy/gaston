// Setup des dépendances
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var concat = require('gulp-concat');
var replace = require('gulp-html-replace');
var uglify = require('gulp-uglify');
var gulp = require('gulp-run-seq');

// Fonction de compilation des fichiers scss
gulp.task('sass', function(){
  return gulp.src('app/assets/scss/**/*.scss')
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(sass())
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Fonction d'optimisation des images (plus "optimizationLevel" est élevé, plus c'est long)
gulp.task('compress', () => {
  return gulp.src('app/assets/images/*')
      .pipe(imagemin({
          progressive: true,
          optimizationLevel: 1,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      }))
      .pipe(gulp.dest('app/assets/images'));
});

// Fonction de concatenation des fichiers css
gulp.task('swag', function() {
  return gulp.src('app/assets/css/*.css')
    .pipe(concat('swag.css'))
    .pipe(gulp.dest('app/assets/css/dist'))
});

// Fonction de concatenation des fichiers js
gulp.task('magic', function() {
  return gulp.src('app/assets/js/*.js')
    .pipe(concat('magic.js'))
    .pipe(gulp.dest('app/assets/js/dist'))
});

// Fonction de concatenation des fichiers js
gulp.task('uglify', function() {
  return gulp.src('app/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/assets/js/dist'));
});

// Fonction release, runner cette commande quand le site est prêt à être mis en ligne
gulp.task('release', [['swag', 'magic', 'compress']], function() {
  console.log('Site Web prêt pour la mise-en-ligne, décommenter les fichiers css/js finaux dans le header');
})

// Refresh du browser à chaque modifications des fichiers du site
// *** IMPORTANT *** ////////////////////////////////////////////
// Modifier le proxy pour l'adresse de dev.

gulp.task('browserSync', function() {
  browserSync({
    // URL de dev à changer ici (racine de l'application)
    proxy: "localhost:8888/StarterKit/app"
  });
})

// Execution des tasks quand un fichier est modifié
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/**/*.php', browserSync.reload);
  gulp.watch('app/assets/js/*.js', browserSync.reload);
});
