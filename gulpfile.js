'use strict';

var gulp  = require('gulp');
//var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var watchify = require('watchify');
var browserify = require('browserify');
var modulesify = require('css-modulesify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var notify = require("gulp-notify");
var gulpif = require('gulp-if');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

function bundle() {
    let apps = ['website'];
    let options = ['production', 'debug'];
    let production = false;
    let debug = false;

    let src = 'website';
    let output = 'bundle.js';

    for (let i = 0; i < process.argv.length; i++) {
	let strArgv = process.argv[i].split('--');

	if (strArgv.length > 1) {
	    let valid = apps.includes(strArgv[1]);
	    if (valid) {
                src = strArgv[1];
	    }
	}
    }

    for (let i = 0; i < process.argv.length; i++) {
	let strArgv = process.argv[i].split('--');

	if (strArgv.length > 1) {
	    let valid = options.includes(strArgv[1]);
	    if (valid) {
		if (strArgv[1] == 'production') {
		    production = true;
		    process.env.NODE_ENV = 'production';
		}
		if (strArgv == 'debug') {
		    debug = true;
		}
	    }
	}
    }

    let b = browserify({
	entries: [`./${src}/static/${src}/app/src/index.js`],
	cache: {},
	packageCache: {},
	debug: debug,
	plugin: [watchify]
    });

    b.plugin(modulesify, {
	rootDir: `${src}/static/${src}/css/src/`,
	output: `${src}/static/${src}/css/styles.css`
	//generateScopedName: modulesify.generateShortName
    });

    b.transform(babelify, {presets: ["env", "react"]});

    let rebundle = function() {
	let stream = b.bundle()
	    .on('error', notify.onError(function(error) {
		return "Build error: " + error.message;
	    }))
	    .pipe(source(output))
	    .pipe(buffer())
	    .pipe(gulpif(production, uglify()))
	    .pipe(gulp.dest(`${src}/static/${src}/app/`))
	    .pipe(notify({ message: 'Build finished with no errors', wait: true }));
	return stream;
    };
    
    b.on('update', rebundle);

    return rebundle();
}

gulp.task('styles', function() {
    let src = 'website';
    let processors = [
	autoprefixer,
	cssnano
    ];

    gulp.src(src+'/static/'+src+'/css/styles.css')
	.pipe(postcss(processors))
        .pipe(gulp.dest(src+'/static/'+src+'/css/'));
});

gulp.task('watch:styles', function() {
    let src = 'website';
    gulp.watch(src+'/static/'+src+'/css/styles.css', ['styles']);
});

gulp.task('build', function() {
    return bundle();
});
