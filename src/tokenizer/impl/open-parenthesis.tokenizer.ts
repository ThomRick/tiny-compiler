import {AbstractToken} from '../models/abstract.token';
import {NullToken} from '../models/null.token';
import {OpenParenthesisToken} from '../models/open-parenthesis.token';
import {ITokenizer} from '../tokenizer.interface';

export class OpenParenthesisTokenizer implements ITokenizer {
  private pattern = /\(/;

  constructor() {}

  public tokenize(input: string): AbstractToken {
    if (this.pattern.test(input[0])) {
      return new OpenParenthesisToken();
    } else {
      return new NullToken();
    }
  }
}
