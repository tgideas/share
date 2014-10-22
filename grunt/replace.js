module.exports = {
  dist_2014_mobi: {
    options: {
      encoding:'utf-8',
      preserveOrder:true,
      patterns: [
        {
          match: /\<\!--MODERNIZR--\>[\S\s]+\<\!--\/MODERNIZR--\>/ig,
          replacement: '<script>\r\n<%= grunt.file.read("2014/mobi/js/modernizr.custom.27971.js") %>\r\n</script>\r\n'
        },
        {
          match: /\<\!--CSS--\>[\S\s]+\<\!--\/CSS--\>/ig,
          replacement: '<style>\r\n<%= grunt.file.read("2014/mobi/dist/css/all.min.css") %>\r\n</style>\r\n'
        },
        {
          match: /\<\!--JQUERY--\>[\S\s]+\<\!--\/JQUERY--\>/g,
          replacement: '@@JQUERY'
        },
        {
          match: /\<\!--JS--\>[\S\s]+\<\!--\/JS--\>/g,
          replacement: '<script>\r\n<%= grunt.file.read("2014/mobi/dist/js/all.min.js") %>\r\n</script>\r\n'
        },
        {
          match: "version",
          replacement: '<%= package.version %>'
        },
        {
          match: /DESC/g,
          replacement: '<%= package.description %>'
        },
        {
          match: /KEYWORDS/g,
          replacement: '<%= package.keywords %>'
        },
        {
          match: /TITLE/g,
          replacement: '<%= package.title %>'
        }
      ]
    },
    files: [
      {expand: false, flatten: true, src: ['2014/mobi/index.html'], dest: '2014/mobi/dist/index.html'}
    ]
  },
  dist_2014_mobi2: {
    options: {
      preserveOrder:true,
      encoding:'utf-8',
      patterns: [
        {
          match: /\.\.\/fonts\//g,
          replacement:'fonts\/'
        },
        {
          match: 'JQUERY',
          replacement: '<script>\r\n<%= grunt.file.read("assets/jquery/2.1.1/jquery-2.1.1.min.js") %>\r\n</script>\r\n'
        }
      ]
    },
    files: [
      {expand: false, flatten: true, src: ['2014/mobi/dist/index.html'], dest: '2014/mobi/dist/index.html'}
    ]
  }
};
