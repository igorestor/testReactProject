module.exports = function(grunt) {
    grunt.registerTask('default', ['browserify', 'watch']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //'jsmin-sourcemap': {
        //    all: {
        //        src: ['script.js'],
        //        dest: 'script.jsmin-grunt.js',
        //        destMap: 'script.jsmin-grunt.js.map'
        //    }
        //},

        browserify: {
            main: {
                src: 'src/js/app.jsx',
                dest: 'build/js/bundle.js',
                options: {
                    debug: true,
                    extensions: ['.jsx'],
                    transform: [["babelify", { "stage": 0 }]],
                    browserifyOptions: {
                        debug: false
                    }
                }
            }
        },

        watch: {
            files: ['src/js/*', 'src/js/components/*'],
            tasks: ['default']
        },

        'http-server': {
            'dev': {
                root: 'build',

                port: 8282,

                host: "localhost",

                cache: 0,
                showDir : true,
                autoIndex: true,

                ext: "html",

                runInBackground: false,

                // Proxies all requests which can't be resolved locally to the given url
                // Note this this will disable 'showDir'
                //proxy: "http://someurl.com",

                // Tell grunt task to open the browser
                openBrowser : false
            }

        }

        //browserify: {
        //    main: {
        //        src: 'js/main.jsx',
        //        dest: 'js/findem.js',
        //        options: {
        //            debug: true,
        //            extensions: ['.jsx'],
        //            transform: [["babelify", { "stage": 0 }]]
        //        }
        //    }
        //},
        //watch: {
        //    files: 'js/*',
        //    tasks: ['default']
        //}
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-jsmin-sourcemap');
};