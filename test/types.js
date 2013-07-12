var test = require('tape');
var parse = require('../');

test('basic types', function (t) {
    t.equal(parse('true'), true);
    t.equal(parse('false'), false);
    t.equal(parse('"xyz"'), 'xyz');
    t.equal(parse('4445'), 4445);
    t.deepEqual(parse('[1,2,3]'), [1,2,3]);
    t.deepEqual(parse('{"a":3,"b":4}'), {a:3,b:4});
    
    t.deepEqual(parse('/xyz/'), /xyz/);
    t.equal(parse('null'), null);
    t.equal(parse('0777'), 0777);
    
    t.end();
});
