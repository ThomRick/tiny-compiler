import {Token} from '../tokenizer/models/token.model';
import {AbstractNode} from './models/abstract.node';

export interface IParser {
  parse(tokens: Token[]): AbstractNode;
}
