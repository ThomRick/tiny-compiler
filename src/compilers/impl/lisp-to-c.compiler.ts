import {IEmitter} from '../../emitters/emitter.interface';
import {CEmitter} from '../../emitters/impl/c.emitter';
import {LispParser} from '../../parsers/impl/lisp.parser';
import {AbstractNode} from '../../parsers/models/abstract.node';
import {IParser} from '../../parsers/parser.interface';
import {TokenizerImpl} from '../../tokenizer/impl/tokenizer.impl';
import {Token} from '../../tokenizer/models/token.model';
import {ITokenizer} from '../../tokenizer/tokenizer.interface';
import {ICompiler} from '../compiler.interface';

export class LispToCCompiler implements ICompiler {
  constructor(
    private tokenizer: ITokenizer = new TokenizerImpl(),
    private parser: IParser = new LispParser(),
    private emitter: IEmitter = new CEmitter(),
  ) {}

  public compile(input: string): string {
    const tokens: Token[] = this.tokenizer.tokenize(input) as Token[];
    const node: AbstractNode = this.parser.parse(tokens);
    return this.emitter.emit(node);
  }
}
