import {CEmitter} from '../emitters/old-impl/c.emitter';
import {LispParser} from '../parsers/old-impl/lisp.parser';
import {Tokenizer} from '../tokenizer/impl-old/tokenizer';

export class LispToCCompiler {
  constructor(private tokenizer = new Tokenizer(), private parser = new LispParser(), private emitter = new CEmitter()) {}

  public compile(input: string) {
    const tokens = this.tokenizer.tokenize(input);
    const node = this.parser.parse(tokens);
    return this.emitter.emit(node);
  }
}
