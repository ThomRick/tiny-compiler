import {AbstractToken} from '../models/abstract.token';
import {NullToken} from '../models/null.token';
import {StringToken} from '../models/string.token';
import {ITokenizer} from '../tokenizer.interface';

export class StringTokenizer implements ITokenizer {
  private pattern = /"/;
  constructor() {}

  public tokenize(input: string): AbstractToken {
    if (this.pattern.test(input[0])) {
      return this.buildToken(input);
    } else {
      return new NullToken();
    }
  }

  private buildToken(input: string): AbstractToken {
    const inputs = input.split('"');
    if (inputs.length < 3) {
      throw new Error('Unterminated string');
    }
    return new StringToken(inputs[1]);
  }
}
