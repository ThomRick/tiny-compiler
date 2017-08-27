import {AbstractToken} from '../models/abstract.token';
import {NullToken} from '../models/null.token';
import {WhiteSpaceToken} from '../models/white-space.token';
import {ITokenizer} from '../tokenizer.interface';

export class WhiteSpaceTokenizer implements ITokenizer {
  private pattern = /\s/;

  constructor() {}

  public tokenize(input: string): AbstractToken {
    if (this.pattern.test(input[0])) {
      return new WhiteSpaceToken();
    } else {
      return new NullToken();
    }
  }
}
