import {CEmitter} from '../emitters/c.emitter';
import {LispParser} from '../parsers/lisp.parser';
import {Tokenizer} from '../tokenizer/tokenizer';

export class LispToCCompiler {
  constructor(private tokenizer = new Tokenizer(), private parser = new LispParser(), private emitter = new CEmitter()) {}

  compile(input) {
    const tokens = this.tokenizer.tokenize(input);
    const node = this.parser.parse(tokens);
    return this.emitter.emit(node);
  }
}
