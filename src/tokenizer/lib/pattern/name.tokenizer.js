import PatternTokenizer from './pattern.tokenizer';
import PatternEnum from '../../../utils/pattern.enum';
import TokenType from '../../../utils/token.type';

export default class NameTokenizer {
  constructor() {
    this.tokenizer = new PatternTokenizer()
  }

  tokenize(input, current) {
    return this.tokenizer.tokenize(TokenType.NAME, PatternEnum.NAME, input, current);
  }
}