module.exports = function(grunt){
    var jsVendorsDependencies =  [
        
    ];
    
    var jsMain = [
        
    ];
    
    grunt.initConfig({ 
        
        watch: {
            scripts: {
              files: jsMain,
              tasks: ['concat:main'],
              options: {
                interrupt: true
              }
            }
        },
        
        concat: {
            options: {
                process: function(src, filepath) {
                  return '\n//  ' + filepath + '\n' + src;
                }
            },
            
            vendors : {
                files: [{
                    src: jsVendorsDependencies,
                    dest: 'dist/vendors.concat.js'
                }]
            },
            
            main : {
                files: [{
                    src: jsMain,
                    dest: 'dist/main.concat.js'
                }]
            }
        }
        
        
    });
    
    
    /*  Dist tasks */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    
    /*  Start task */
    grunt.registerTask('default', ['concat:vendors', 'concat:main']);
};