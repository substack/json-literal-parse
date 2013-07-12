var json = require('../');
//var xs = json.parse('["robot",/^b[eo]{2}p$/]');
var xs = json.parse(process.argv.slice(2).join(' '));
console.dir(xs);
