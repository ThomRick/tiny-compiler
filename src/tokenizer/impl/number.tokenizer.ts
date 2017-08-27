import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';

export class NumberTokenizer implements ITokenizer {
  private pattern = /[0-9]/;

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
    let value = '';
    while (this.pattern.test(inputs[0])) {
      value = value.concat(inputs.shift());
    }
    return new Token(TokenType.NUMBER, value);
  }
}
