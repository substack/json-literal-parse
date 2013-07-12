var esprima = require('esprima');

module.exports = function (src) {
    var result;
    var ast = esprima.parse('(' + src + ')');
    
    if (ast.body.length !== 1) {
        throw new Error('unexpected extra expression');
    }
    else if (ast.body[0].type !== 'ExpressionStatement') {
        throw new Error('expected ExpressionStatement');
    }
    
    var root = ast.body[0].expression;
    
    return (function walk (node) {
        if (node.type === 'Literal') {
            return node.value;
        }
        else if (node.type === 'ArrayExpression') {
            return node.elements.map(walk);
        }
        else if (node.type === 'ObjectExpression') {
            var obj = {};
            for (var i = 0; i < node.properties.length; i++) {
                var prop = node.properties[i];
                var value = prop.value === null
                    ? prop.value
                    : walk(prop.value)
                ;
                obj[prop.key.value] = value;
            }
            return obj;
        }
        else throw new Error('unexpected ' + node.type + ' node');
    })(root);
};
