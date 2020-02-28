function app(r) {
    var fs = require('fs');
    var raw = fs.readFileSync('/etc/nginx/js/routes.json').toString();
    var routes = JSON.parse(raw);

    var names = Object.keys(routes);

    var route = false;
    for (var i = 0; i < names.length; i += 1) {
        if (r.uri.indexOf(names[i]) > -1) {
            route = routes[names[i]].app;
        }
    }

    return route;
}
