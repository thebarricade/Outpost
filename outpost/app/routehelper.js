module.exports = function(href) {
    var parts = href.split('?/');
    var postPath = parts.length > 1 ? parts[1] : 'index';

    postPath = postPath.replace('../', '');

    if(postPath === '') { postPath = 'index'; }

    return postPath;
};
