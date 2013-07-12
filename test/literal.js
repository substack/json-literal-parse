var test = require('tape');
var json = require('../');

test('string, regex, object, null, octal', function (t) {
    var xs = json.parse('["robot",/^b[eo]{2}p$/,{"x":null,"y":0777}]');
    t.deepEqual(xs, ["robot",/^b[eo]{2}p$/,{"x":null,"y":0777}]);
    t.ok(xs[1] instanceof RegExp);
    t.end();
});

test('not allowed', function (t) {
    t.throws('syntax error', function () {
        json.parse('["a","b",');
    });
    t.throws('expression', function () {
        json.parse(';["a","b"]');
    });
    t.throws('assignment expression', function () {
        json.parse('x=["a","b"]');
    });
    t.throws('parenthetical', function () {
        json.parse('(["a","b"])');
    });
    t.throws('inline function', function () {
        json.parse('["a","b",function(){}]');
    });
    t.throws('identifier', function () {
        json.parse('["a","b",c]');
    });
    t.throws('undefined identifier', function () {
        json.parse('["a","b",undefined]');
    });
    t.end();
});
