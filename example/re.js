var json = require('../');
var xs = json.parse('["robot",/^b[eo]{2}p$/,{"x":null,"y":0777}]');
console.dir(xs);
