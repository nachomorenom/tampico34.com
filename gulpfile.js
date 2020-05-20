// Este gulp pertenece al framework P4K0FSD
// *****************************************************************************

// Pasos -----------------------------------------------------------------------
// Inicializar git      -> git init
// Instalar modulos     -> npm install
// Inicializar el framework creando estructura de directorios   -> gulp etr
// Copiar algunos archivos necesarios para desarrollo           -> gulp copyfiles





// REQUIRES
// -----------------------------------------------------------------------------
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const uglify = require('gulp-uglifycss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const { series } = require('gulp');
const rename = require('gulp-rename');


// MIS VARIABLES
// -----------------------------------------------------------------------------
var paths = {
	// scssFiles: {
	// 	src:  'scss/**/*.scss',
	// 	dest: 'public/css'
	// },
    scssBootstrap: {
        src:  'scss/bootstrap/*.scss',
        dest: 'public/css/bootstrap'
    },
    scssFontawesome: {
        src:  'scss/fontawesome/*.scss',
        dest: 'public/plugins/fontawesome'
    },
	jsFiles: {
		src:  '',
		dest: ''
	},
	htmlFiles: {
		src:  'dist/public/*.html',
		dest: 'dist/public'
	},
};


// TAREAS
// -----------------------------------------------------------------------------

function etrDirTampico34(){
    //public    Hojas de estilo CSS, archivos JavaScript js, imagenes, fuentes, librerias js, plugins
    //config    Archivos PHP de configuracion general y conexion a la base de datos
    //files     Archivos cargados en el sistema por el usuario: imagenes jpg png gif, pdf
    //modelos   Archivos PHP con las instrucciones para insertar, editar, eliminar, listar y buscar registros
    //          de las diferentes tablas, upd, del, sel
    //ajax      Archivos PHP que van a retornar valores a las peticiones ajax que las referencien
    //vistas    Interfaces HTML
    return gulp
        .src('*.*', {read: false})
        .pipe(gulp.dest('./config'))
        .pipe(gulp.dest('./scss'))
        .pipe(gulp.dest('./scss/bootstrap'))
        .pipe(gulp.dest('./scss/fontawesome'))
        .pipe(gulp.dest('./public'))
        .pipe(gulp.dest('./public/css'))
        .pipe(gulp.dest('./public/plugins'))
        .pipe(gulp.dest('./public/fonts'))
        .pipe(gulp.dest('./public/images'))
        .pipe(gulp.dest('./public/js'))
}




// //Estas funciones copiaran archivos desde node-modules a directorios de desarrollo
//------------------------------------------------------------------------------

// Todo esto es de BOOTSTRASP
function copy_variables_p4k0fsd_scss(){
    return gulp
        .src('*.*')
        .pipe(rename('_mis_variables_p4k0fsd.scss'))
        .pipe(gulp.dest('./scss'));
}
function copy_variables_bootstrap_scss(){
    return gulp
        .src('./node_modules/bootstrap/scss/_variables.scss', {allowEmpty:true})
        .pipe(rename('_mis_variables_bootstrap.scss'))
        .pipe(gulp.dest('./scss/bootstrap'));
}
function copy_bootstrap_js(){
    return gulp
        .src('./node_modules/bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest('./public/js'));
}
function copy_jquery_js(){
    return gulp
        .src('./node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest('./public/js'));
}
function copy_popper_js(){
    return gulp
        .src('./node_modules/popper.js/dist/umd/popper.js')
        .pipe(gulp.dest('./public/js'));
}

//------------------------------------------------------------------------------
// Para que funcione fontawesome tengo que copiar este directorio junto a mis css
function copy_fontawsome_webfonts(){
    return gulp
        .src('./node_modules/@fortawesome/fontawesome-free/webfonts/**/*.*')
        .pipe(gulp.dest('./public/plugins/fontawesome/webfonts'));
}

function copy_fontawesome_scss(){
    return gulp
        .src('./node_modules/@fortawesome/fontawesome-free/scss/*.scss', {allowEmpty:true})
        .pipe(gulp.dest('./scss/fontawesome'));
}

function rename_fontawesome_variables_scss(){
    return gulp
        .src('./scss/fontawesome/_variables.scss', {allowEmpty:true})
        .pipe(rename('_mis_variables_fontawesome.scss'))
        .pipe(gulp.dest('./scss/fontawesome'));
}

exports.iniFontawesome  = series(
                                copy_fontawsome_webfonts,
                                copy_fontawesome_scss
                                // rename_fontawesome_variables_scss
                                );


//------------------------------------------------------------------------------
// LIGHTBOX by Lokesh Dhakar   ->   https://lokeshdhakar.com/projects/lightbox2/
function copy_lightbox2_css(){
    return gulp
        .src('./node_modules/lightbox2/dist/css/lightbox.css')
        .pipe(gulp.dest('./public/plugins/lightbox2'));
}
function copy_lightbox2_js(){
    return gulp
        .src('./node_modules/lightbox2/dist/js/lightbox.js')
        .pipe(gulp.dest('./public/plugins/lightbox2'));
}
exports.iniLightbox2  = series( 
                                copy_lightbox2_css,
                                copy_lightbox2_js
                                );



// Funciones para compilar SCSS
//------------------------------------------------------------------------------
function scssTask_p4k0fsd() {
    return gulp
        .src(paths.scssFiles.src)
        .pipe(sass({ outputStyle: "nested", 	// Compilo scss (expanded compressed nested compact)
                     includePaths: paths.scssFiles.src
                   }))
        .pipe(sourcemaps.init())                // Inicializo el .map del css
        .pipe(postcss([ autoprefixer() ]))      // Paso el autoprefixer
        // .pipe(uglify( { "maxLineLen": 80,
      		// 			"uglyComments": true
    				//   } ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scssFiles.dest))
        .pipe(browserSync.stream());
}
function scssTask_bootstrap() {
    return gulp
        .src(paths.scssBootstrap.src)
        .pipe(sass({ outputStyle: "nested",
                     includePaths: paths.scssBootstrap.src
                   }))
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scssBootstrap.dest))
        .pipe(browserSync.stream());
}
function scssTask_fontawesome() {
    return gulp
        .src(paths.scssFontawesome.src)
        .pipe(sass({ outputStyle: "nested",
                     includePaths: paths.scssFontawesome.src
                   }))
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scssFontawesome.dest))
        .pipe(browserSync.stream());
}

function htmlTask() {
    return gulp
        .src(paths.htmlFiles.src)
        .pipe(gulp.dest(paths.htmlFiles.dest))
        .pipe(browserSync.stream());
}

function imageTask() {
	return gulp
		.src(paths.imageFiles.src)
		.pipe(imagemin([
		    imagemin.gifsicle({interlaced: true}),
		    imagemin.jpegtran({progressive: true}),
		    imagemin.optipng({optimizationLevel: 5}),
		    imagemin.svgo({
		        plugins: [
		            {removeViewBox: true},
		            {cleanupIDs: false}
		        ]
		    })
		]))
		.pipe(gulp.dest(paths.imageFiles.dest));
}

function watch() {
    // browserSync.init({
    //     server: {
    //        baseDir: "./public",
    //        index: "/index.php"
    //     }
    // });
//    gulp.watch(paths.scssFiles.src, scssTask_p4k0fsd);
    gulp.watch(paths.scssBootstrap.src, scssTask_bootstrap);
    gulp.watch(paths.scssFontawesome.src, scssTask_fontawesome);

//    gulp.watch(paths.htmlFiles.src).on(change, );
}


// EXPORTS
// -----------------------------------------------------------------------------
// Sintaxis    ->    exports.nombreComando = nombrefuncionArribaDefinida;
// Para usarlo: abro la consola en el directorio de este gulp
// y tecleo    ->    gulp nombreComando     (para pararlo ->   ctrl + c )

exports.watch  = watch;
exports.images = imageTask;

exports.iniciarTampico34 = series(
                                etrDirTampico34,
                                copy_variables_p4k0fsd_scss,
                                copy_variables_bootstrap_scss,
                                copy_bootstrap_js,
                                copy_jquery_js,
                                copy_popper_js,
                                copy_fontawsome_webfonts,
                                copy_fontawesome_scss
                                );