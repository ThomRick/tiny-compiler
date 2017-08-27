import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';

export class CloseParenthesisTokenizer implements ITokenizer {
  private pattern = /\)/;

  constructor() {}

  public tokenize(input: string): Token {
    if (this.pattern.test(input[0])) {
      return new Token(TokenType.PARENTHESIS, ')');
    } else {
      return new Token();
    }
  }
}
