
/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var pkg     = grunt.file.readJSON('package.json');
  var nlPaths = grunt.file.readJSON('../Neatline/paths.json');
  var paths   = grunt.file.readJSON('paths.json');

  grunt.initConfig({

    symlink: {

      neatline: {
        link: 'Neatline',
        target: '../Neatline',
        options: {
          overwrite: true
        }
      }

    },

    bower: {
      install: {
        options: { copy: false }
      }
    },

    clean: {

      dist: [
        paths.dist.js.shared,
        paths.dist.css.shared
      ],

      fixtures: [
        paths.jasmine+'/fixtures/*.json',
        paths.jasmine+'/fixtures/*.html'
      ],

      bower: '/bower_components',

      pkg: 'pkg'

    },

    concat: {

      simile_public: {
        src: [
          paths.vendor.moment,
          paths.src.js.shared+'/public/*.js'
        ],
        dest: paths.dist.js.shared+'/simile-public.js'
      },

      simile_editor: {
        src: [
          '<%= concat.simile_public.src %>',
          paths.src.js.shared+'/editor/*.js'
        ],
        dest: paths.dist.js.shared+'/simile-editor.js'
      },

      simile_public_css: {
        src: [
          paths.dist.css.shared+'/simile-public.css'
        ],
        dest: paths.dist.css.shared+'/simile-editor.css'
      }

    },

    uglify: {

      simile_public: {
        src: '<%= concat.simile_public.dest %>',
        dest: paths.dist.js.shared+'/simile-public.js'
      },

      simile_editor: {
        src: '<%= concat.simile_editor.dest %>',
        dest: paths.dist.js.shared+'/simile-editor.js'
      }

    },

    stylus: {

      compile: {
        src: paths.src.styl.shared+'/public/*.styl',
        dest: paths.dist.css.shared+'/simile-public.css'
      }

    },

    copy: {

      simile: {
        files: [{
          cwd: 'bower_components/simile/',
          src: '**',
          dest: paths.dist.js.shared+'/simile',
          flatten: false,
          expand: true
        }]
      }

    },

    watch: {

      payload: {
        files: [
          '<%= concat.simile_public.src %>',
          '<%= concat.simile_editor.src %>',
          paths.src.styl.shared+'/**/*.styl'
        ],
        tasks: ['compile']
      }

    },

    phpunit: {

      options: {
        bin: 'Neatline/vendor/bin/phpunit',
        bootstrap: 'tests/phpunit/bootstrap.php',
        followOutput: true,
        colors: true
      },

      application: {
        dir: 'tests/phpunit'
      }

    },

    jasmine: {

      options: {
        host: 'http://localhost:1337',
        template: 'Neatline/'+nlPaths.jasmine+'/runner.tmpl',
        helpers: [
          'Neatline/'+nlPaths.jasmine+'/dist/vendor.js',
          paths.jasmine+'/helpers/*.js',
          paths.jasmine+'/assertions/*.js'
        ]
      },

      neatline: {
        src: [
          'Neatline/'+nlPaths.dist.js.shared+'/neatline-public.js',
          paths.dist.js.shared+'/simile-public.js'
        ],
        options: {
          specs: paths.jasmine+'/tests/neatline/**/*.spec.js'
        }
      },

      editor: {
        src: [
          'Neatline/'+nlPaths.dist.js.shared+'/neatline-editor.js',
          paths.dist.js.shared+'/simile-editor.js'
        ],
        options: {
          specs: paths.jasmine+'/tests/editor/**/*.spec.js'
        }
      }

    },

    connect: {

      options: {
        port: 1337
      },

      temporary: {
        options: {
          keepalive: false
        }
      },

      permanent: {
        options: {
          keepalive: true
        }
      }

    },

    compress: {

      dist: {
        options: {
          archive: 'pkg/NeatlineSimile-'+pkg.version+'.zip'
        },
        dest: 'NeatlineSimile/',
        src: [

          '**',

          // GIT
          '!.git/**',

          // BOWER
          '!bower.json',
          '!bower_components/**',

          // NPM
          '!package.json',
          '!node_modules/**',

          // GRUNT
          '!.grunt/**',
          '!Gruntfile.js',
          '!paths.json',

          // SYMLINK
          '!Neatline/**',

          // DIST
          '!pkg/**',

          // TESTS
          '!tests/**'

        ]
      }

    }

  });

  // Run tests.
  grunt.registerTask('default', 'test');

  // Build the application.
  grunt.registerTask('build', [
    'symlink',
    'clean',
    'bower',
    'copy',
    'compile'
  ]);

  // Assemble static assets.
  grunt.registerTask('compile', [
    'stylus',
    'concat'
  ]);

  // Assemble/min static assets.
  grunt.registerTask('compile:min', [
    'compile',
    'uglify'
  ]);

  // Run Jasmine via Connect server.
  grunt.registerTask('jasmine:connect', [
    'connect:temporary',
    'jasmine:neatline',
    'jasmine:editor'
  ]);

  // Mount public Jasmine suite.
  grunt.registerTask('jasmine:neatline:server', [
    'jasmine:neatline:build',
    'connect:permanent'
  ]);

  // Mount editor Jasmine suite.
  grunt.registerTask('jasmine:editor:server', [
    'jasmine:editor:build',
    'connect:permanent'
  ]);

  // Run application tests.
  grunt.registerTask('test', [
    'compile:min',
    'clean:fixtures',
    'phpunit',
    'jasmine:connect'
  ]);

  // Spawn release package.
  grunt.registerTask('package', [
    'compile:min',
    'clean:pkg',
    'compress'
  ]);

};
