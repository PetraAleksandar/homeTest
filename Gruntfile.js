module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['style/*.scss'],
        tasks: ['sass', 'postcss'],
      }
    },
    sass: {
      options: {
        style: 'compressed'
      },                              // Task
      dist: {                            // Target
        files: {                         // Dictionary of files
          'build/main.css': 'style/style.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer') ({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        src: 'build/main.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default', ['watch']);
};
