import {PatternEnum} from '../../utils/pattern.enum';
import {TokenType} from '../../utils/token.type';
import {PatternTokenizer} from './pattern.tokenizer';

export class NameTokenizer {
  constructor(private tokenizer = new PatternTokenizer()) {}

  tokenize(input, current) {
    return this.tokenizer.tokenize(TokenType.NAME, PatternEnum.NAME, input, current);
  }
}
