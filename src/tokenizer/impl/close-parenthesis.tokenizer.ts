import {AbstractToken} from '../models/abstract.token';
import {CloseParenthesisToken} from '../models/close-parenthesis.token';
import {NullToken} from '../models/null.token';
import {ITokenizer} from '../tokenizer.interface';

export class CloseParenthesisTokenizer implements ITokenizer {
  private pattern = /\)/;

  constructor() {}

  public tokenize(input: string): AbstractToken {
    if (this.pattern.test(input[0])) {
      return new CloseParenthesisToken();
    } else {
      return new NullToken();
    }
  }
}
