var parse = require('../');
var xs = parse('["robot",/^b[eo]{2}p$/,{"x":null,"y":0777}]');
console.dir(xs);
