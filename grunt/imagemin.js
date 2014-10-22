module.exports = {

    options: {
        cache: false
    },

    dist_2014_mobi: {
        files: [{
            
            expand: true,                // Enable dynamic expansion
            cwd: '2014/mobi/img/',              // src matches are relative to this path
            src: ["*.{png,jpg,gif}"], // Actual patterns to match
            dest: '2014/mobi/dist/img/'            // Destination path prefix
        }]
    }
};
