module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'content/themes/biojs-theme/assets/css/main.css':'content/themes/biojs-theme/assets/sass/main.scss'
        },
        options: {
          bundleExec: true
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('sassify',['sass']);
}