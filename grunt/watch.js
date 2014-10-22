module.exports = {
  less: {
    files:["less/**/*.less"],
    tasks:["less"]
  },
  js_2014_mobi:{
    files:["2014/mobi/js/*.js"],
    tasks:["concat","uglify"]
  },
  css_2014_mobi:{
    files:["2014/mobi/css/*.css"],
    tasks:["concat_css","cssmin"]
  },
  build:{
    files:["2014/mobi/*.html"],
    tasks:["replace"]
  }
};
