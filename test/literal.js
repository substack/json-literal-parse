var test = require('tape');
var parse = require('../');

test('string, regex, object, null, octal', function (t) {
    var xs = parse('["robot",/^b[eo]{2}p$/,{"x":null,"y":0777}]');
    t.deepEqual(xs, ["robot",/^b[eo]{2}p$/,{"x":null,"y":0777}]);
    t.ok(xs[1] instanceof RegExp);
    t.end();
});

test('not allowed', function (t) {
    t.throws('syntax error', function () {
        parse('["a","b",');
    });
    t.throws('expression', function () {
        parse(';["a","b"]');
    });
    t.throws('comment', function () {
        parse('["a",/*c*/"b"]');
    });
    t.throws('assignment expression', function () {
        parse('x=["a","b"]');
    });
    t.throws('parenthetical', function () {
        parse('(["a","b"])');
    });
    t.throws('inline function', function () {
        parse('["a","b",function(){}]');
    });
    t.throws('identifier', function () {
        parse('["a","b",c]');
    });
    t.throws('undefined identifier', function () {
        parse('["a","b",undefined]');
    });
    t.end();
});
