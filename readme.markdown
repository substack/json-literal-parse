# json-literal-parse

superset of `JSON.parse()` adding regex, null, and octal literals

[![browser support](http://ci.testling.com/substack/json-literal-parse.png)](http://ci.testling.com/substack/json-literal-parse)

[![build status](https://secure.travis-ci.org/substack/json-literal-parse.png)](http://travis-ci.org/substack/json-literal-parse)

# example

``` js
var parse = require('json-literal-parse');
var xs = parse('["robot",/^b[eo]{2}p$/,{"x":null,"y":0777}]');
console.dir(xs);
```

# methods

``` js
var parse = require('json-literal-parse')
```

## var obj = parse(str)

Parse the input string `str`, returning the parsed representation `obj`.

`parse()` is just like `JSON.parse()` except that the input may have additional
`"literal"` types not in the JSON spec, which are:

* regex
* null
* octal

# install

With [npm](https://npmjs.org) do:

```
npm install json-literal-parse
```

# license

MIT
