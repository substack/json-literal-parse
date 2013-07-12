var test = require('tape');
var json = require('../');

test('string, regex, object, null, octal', function (t) {
    var xs = json.parse('["robot",/^b[eo]{2}p$/,{"x":null,"y":0777}]');
    t.deepEqual(xs, ["robot",/^b[eo]{2}p$/,{"x":null,"y":0777}]);
    t.ok(xs[1] instanceof RegExp);
    t.end();
});
