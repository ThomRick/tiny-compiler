import PatternTokenizer from './pattern.tokenizer';
import TokenType from '../../../utils/token.type';
import PatternEnum from '../../../utils/pattern.enum';

export default class NumberTokenizer {
  constructor() {
    this.tokenizer = new PatternTokenizer();
  }

  tokenize(input, current) {
    return this.tokenizer.tokenize(TokenType.NUMBER, PatternEnum.NUMBER, input, current)
  }
}