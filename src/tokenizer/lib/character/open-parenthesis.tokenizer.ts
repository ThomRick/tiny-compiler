import {CharacterTokenizer} from './character.tokenizer';
import {TokenType} from '../../../utils/token.type';

export class OpenParenthesisTokenizer {
  constructor(private tokenizer = new CharacterTokenizer()) {
  }

  tokenize(input, current) {
    return this.tokenizer.tokenize(TokenType.PARENTHESIS, '(', input, current);
  }
}