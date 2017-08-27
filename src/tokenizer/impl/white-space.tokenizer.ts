import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';

export class WhiteSpaceTokenizer implements ITokenizer {
  private pattern = /\s/;

  constructor() {}

  public tokenize(input: string): Token {
    if (this.pattern.test(input[0])) {
      return new Token(TokenType.WHITE_SPACE, ' ');
    } else {
      return new Token();
    }
  }
}
