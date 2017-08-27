import {AbstractToken} from '../models/abstract.token';
import {NameToken} from '../models/name.token';
import {NullToken} from '../models/null.token';
import {ITokenizer} from '../tokenizer.interface';

export class NameTokenizer implements ITokenizer {
  private pattern = /[a-z]/;

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
    const value: string = inputs.reduce((previous, current, index) => {
      if (this.pattern.test(current) && index <= previous.length) {
        return previous.concat(current);
      } else {
        return previous;
      }
    }, '');
    return new NameToken(value);
  }
}
