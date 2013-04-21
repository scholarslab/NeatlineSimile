
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Simile
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-symbolic-link');
  grunt.loadNpmTasks('grunt-shell');

  var nlCfg = grunt.file.readJSON('../Neatline/config.json');
  var cfg = grunt.file.readJSON('./config.json');

  grunt.initConfig({

    symlink: {
      neatline: {
        link: './Neatline',
        target: '../Neatline',
        options: {
          overwrite: true
        }
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          port: 1337
        }
      }
    },

    clean: {
      payloads: [
        cfg.payloads.shared.js,
        cfg.payloads.shared.css
      ]
    },

    concat: {

      simile_public: {
        src: cfg.src.shared+'/public/*.js',
        dest: cfg.payloads.shared.js+'/simile-public.js'
      },

      simile_editor: {
        src: [
          '<%= concat.simile_public.src %>',
          cfg.src.shared+'/editor/*.js'
        ],
        dest: cfg.payloads.shared.js+'/simile-editor.js'
      }

    },

    uglify: {

      simile_public: {
        src: '<%= concat.simile_public.src %>',
        dest: cfg.payloads.shared.js+'/simile-public.js'
      },

      simile_editor: {
        src: '<%= concat.simile_editor.src %>',
        dest: cfg.payloads.shared.js+'/simile-editor.js'
      }

    },

    watch: {
      payload: {
        files: [
          '<%= concat.simile_public.src %>',
          '<%= concat.simile_editor.src %>'
        ],
        tasks: ['compile']
      }
    },

  });

  // Build the application.
  grunt.registerTask('build', [
    'clean',
    'symlink',
    'compile'
  ]);

  // Assemble static assets.
  grunt.registerTask('compile', [
    'concat:simile_public',
    'concat:simile_editor'
  ]);

  // Assemble/min static assets.
  grunt.registerTask('compile:min', [
    'uglify:simile_public',
    'uglify:simile_editor'
  ]);

};
