# Regulex
Author: [CJex](https://github.com/CJex/regulex)

[Regulex](https://jex.im/regulex/) is a JavaScript Regular Expression Parser & Visualizer.

Try it now: <https://jex.im/regulex/>

**This is the legacy version!**

**Switch export method to commonjs.**

**Note: This repository has repaired ES6 module imports for easier usage.**


### Features

- Written in pure JavaScript. No backend required.
- You can embed the graph on you own site through HTML iframe element.
- Detailed error message. In most cases it can point out the precise syntax error position.
- No support for octal escape. Yes it is a feature! ECMAScript strict mode doesn't allow octal escape in string, but many browsers still allow octal escape in regex. In regulex, DecimalEscape will always be treated as back reference. If the back reference is invalid, e.g. `/\1/`, `/(\1)/`, `/(a)\2/`, or DecimalEscape appears in charset（because in this case it can't be explained as back reference, e.g. `/(ab)[\1]/`, Regulex will always throw an error.

### Install for Node.js
```
npm install @tkudlicka/regulex
```


### Using
```javascript
const regulex = require('@tkudlicka/regulex');
// or import * as regulex from '@tkudlicka/regulex'
```

### API

#### Parse to AST

```javascript
var parse = require("index").parse;
var re = /var\s+([a-zA-Z_]\w*);/ ;
console.log(parse(re.source));
```

#### Visualize

```javascript
var parse = require("index").parse;
var visualize = require("index").visualize;
var Raphael = require('index').Raphael;
var re = /var\s+([a-zA-Z_]\w*);/;
var paper = Raphael("yourSvgContainerId", 0, 0);
try {
  visualize(parse(re.source), getRegexFlags(re), paper);
} catch(e) {
 @tkudlicka/quasar-regulex if (e instanceof parse.RegexSyntaxError) {
    logError(re, e);
  } else {
    throw e;
  }
}

function logError(re, err) {
  var msg = ["Error:" + err.message, ""];
  if (typeof err.lastIndex === "number") {
    msg.push(re);
    msg.push(new Array(err.lastIndex).join("-") + "^");
  }
  console.log(msg.join("\n"));
}


function getRegexFlags(re) {
  var flags = "";
  flags += re.ignoreCase ? "i" : "";
  flags += re.global ? "g" : "";
  flags += re.multiline ? "m" : "";
  return flags;
}
```
