module.exports = {
  options: {
    // the banner is inserted at the top of the output
    banner: '<%= banner%>'
  },
  dist_2014_mobi:{
    src:'<%= concat_css.dist_2014_mobi.dest %>',
    dest:'2014/mobi/dist/css/all.min.css'
  }
};
