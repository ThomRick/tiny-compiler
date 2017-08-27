import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';

export class NameTokenizer implements ITokenizer {
  private pattern = /[a-z]/;

  constructor() {}

  public tokenize(input: string): Token {
    if (this.pattern.test(input[0])) {
      return this.buildToken(input);
    } else {
      return new Token();
    }
  }

  private buildToken(input: string): Token {
    const inputs = input.split('');
    const value: string = inputs.reduce((previous, current, index) => {
      if (this.pattern.test(current) && index <= previous.length) {
        return previous.concat(current);
      } else {
        return previous;
      }
    }, '');
    return new Token(TokenType.NAME, value);
  }
}
