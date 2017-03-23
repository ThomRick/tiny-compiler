const LispToCCompiler = require('./dist/compilers/lisp-to-c.compiler').default;
const compiler = new LispToCCompiler();
const lispCode = '(add 1 2 (mult 3 4))';
console.log(`compile: ${ lispCode } <=> ${ compiler.compile(lispCode) }`);