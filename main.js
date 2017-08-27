const LispToCCompiler = require('./dist/compilers/impl/lisp-to-c.compiler');

class Application {
  constructor() {}

  static main(args) {
    args.splice(0, 2);
    if (args.length === 0) {
      throw new Error('Supply expression to compile');
    }
    const lispCode = args[0];
    const compiler = new LispToCCompiler.LispToCCompiler();
    console.log(`compile: ${ lispCode } => ${ compiler.compile(lispCode) }`);
  }
}
Application.main(process.argv);
