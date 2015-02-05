grunt = require('grunt')
path = require('path')

# load all grunt tasks
require('load-grunt-tasks')(grunt)

grunt.initConfig
  recess:
    development:
      options:
        compile: true
      files: [
        expand: true
        cwd: './'
        src:['source/stylesheets/*']
        dest: '.tmp/'
        ext: '.css'
        filter: (src) ->
          return src.split('/').pop()[0] != '_' && (src.indexOf('.css') != -1 || src.indexOf('.less') != -1)
      ]


  jade:
    compile:
      files: [
        expand: true
        cwd: './'
        src: [ 'source/**/*.jade' ]
        ext: '.html'
      ]

  lddesign:
    development:
      options:
        # templates do not work unminified. Is there a bug in livingdocs-engine?
        minify: false
        minifyOptions:
          collapseWhitespace: true
          removeComments: true
          removeCommentsFromCDATA: true
          removeCDATASectionsFromCDATA: true
        templatesDirectory: 'components'
        configurationElement: 'script[type=ld-conf]'
      files: [
        expand: true
        cwd: './'
        src: ['source']
        dest: '.tmp/'
      ]
    build:
      options:
        # templates do not work unminified. Is there a bug in livingdocs-engine?
        minify: true
        minifyOptions:
          collapseWhitespace: true
          removeComments: true
          removeCommentsFromCDATA: true
          removeCDATASectionsFromCDATA: true
        templatesDirectory: 'components'
        configurationElement: 'script[type=ld-conf]'
      files: [
        expand: true
        cwd: './'
        src: ['source']
        dest: '.tmp/'
      ]

  copy:
    assets:
      files: [
        expand: true
        cwd: './'
        src:[
          'source/images/**'
          'source/index.html'
        ]
        dest: '.tmp/'
        # exclude empty directories
        filter: (src) ->
          return src.split('/').pop().indexOf('.') != -1
      ]
    tmpToDist:
      files: [
        expand: true
        cwd: '.tmp/source/'
        src: ['**/*']
        dest: 'dist/'
      ]
    dist:
      files: [
        expand: true
        cwd: 'dist/'
        src: ['**']
        dest: '../livingdocs-editor/app/designs/dist/'
      ]
    stylesheets:
      files: [
        expand: true
        cwd: './'
        src:['source/stylesheets/**/*.css']
        dest: '.tmp/'
      ]

  watch:
    scripts:
      files: ['source/**/*']
      tasks: ['default']
      options:
        nospawn: true
        reload: true
        livereload: 35769

  clean:
    preBuild: ['.tmp/', 'dist/']
    postBuild: ['.tmp/']

  express:
    dev:
      options:
        port: 3333
        hostname: 'localhost'
        open: true
        server: './server'

grunt.registerTask "postCompile", [
  "recess"
  "copy:assets"
  "copy:stylesheets"
  "copy:tmpToDist"
  "clean:postBuild"
]

grunt.registerTask "default", [
  "clean:preBuild"
  "jade"
  "lddesign:development"
  "postCompile"
]

grunt.registerTask "build", [
  "clean:preBuild"
  "lddesign:build"
  "postCompile"
]

grunt.registerTask "serve", [
  "default"
  "express"
  "watch:scripts"
]


grunt.registerTask "dev", ["serve"]

