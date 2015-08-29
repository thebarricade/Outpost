(function() {
    // qwest requires these two libs
    window.pinkySwear = require('./lib/pinkyswear/pinkyswear.min');
    window.param = require('./lib/jquery-param/jquery-param.min');

    var marked = require('./lib/marked/index');
    var qwest = require('./lib/qwest/qwest.min');

    var routeHelper = require('./app/routehelper');

    var postPath = routeHelper(document.location.href);

    // post-loading and formatting
    qwest.get('../posts/' + postPath + '.md')
        .then(function(xhr, response) {
            var mountPoint = document.getElementById('mountpoint');
            var text = marked(response, {}, function(error, result) {
                if (!error) {
                    mountPoint.innerHTML = result;
                }
            });
        })
        .catch(function(xhr, response) {
            var mountPoint = document.getElementById('mountpoint');
            mountPoint.innerHTML = postPath + ' not found';
        });
})();
