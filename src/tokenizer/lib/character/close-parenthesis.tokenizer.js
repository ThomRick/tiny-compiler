import TokenType from '../../../utils/token.type';
import CharacterTokenizer from './character.tokenizer';

export default class CloseParenthesisTokenizer {
  constructor() {
    this.tokenizer = new CharacterTokenizer();
  }

  tokenize(input, current) {
    return this.tokenizer.tokenize(TokenType.PARENTHESIS, ')', input, current);
  }
}