import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';

export class StringTokenizer implements ITokenizer {
  private pattern = /"/;
  constructor() {}

  public tokenize(input: string): Token {
    if (this.pattern.test(input[0])) {
      return this.buildToken(input);
    } else {
      return new Token();
    }
  }

  private buildToken(input: string) {
    const inputs = input.split('"');
    if (inputs.length < 3) {
      throw new Error('Unterminated string');
    }
    return new Token(TokenType.STRING, inputs[1]);
  }
}
