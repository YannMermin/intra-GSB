module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/css/style.css' : 'assets/css/src/style.scss'
        }
      }
    },
    watch: {
      style_css: {
        files: 'assets/css/src/style.scss',
        tasks: ['style_css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
};