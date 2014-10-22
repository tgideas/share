module.exports = {
    options: {
        // the banner is inserted at the top of the output
        banner: '<%= banner%>'
    },
    //for test only
    dist_2014_mobi: {
        files: {
            '2014/mobi/dist/js/all.min.js': ['2014/mobi/dist/js/all.js']
        }
    }
};
