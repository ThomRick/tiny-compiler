import {Tokenizer} from '../tokenizer/tokenizer';
import {LispParser} from '../parsers/lisp.parser';
import {CEmitter} from '../emitters/c.emitter';

export class LispToCCompiler {
  constructor() {
    this.tokenizer = new Tokenizer();
    this.parser = new LispParser();
    this.emitter = new CEmitter();
  }

  compile(input) {
    const tokens = this.tokenizer.tokenize(input);
    const node = this.parser.parse(tokens);
    return this.emitter.emit(node);
  }
}