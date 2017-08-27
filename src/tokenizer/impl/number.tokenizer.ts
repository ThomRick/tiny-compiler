import {AbstractToken} from '../models/abstract.token';
import {NullToken} from '../models/null.token';
import {NumberToken} from '../models/number.token';
import {ITokenizer} from '../tokenizer.interface';

export class NumberTokenizer implements ITokenizer {
  private pattern = /[0-9]/;

  constructor() {}

  public tokenize(input: string): AbstractToken {
    if (this.pattern.test(input[0])) {
      return this.buildToken(input);
    } else {
      return new NullToken();
    }
  }

  private buildToken(input: string): AbstractToken {
    const inputs = input.split('');
    let value = '';
    while (this.pattern.test(inputs[0])) {
      value = value.concat(inputs.shift());
    }
    return new NumberToken(value);
  }
}
