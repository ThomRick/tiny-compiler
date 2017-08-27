import {CloseParenthesisTokenizer} from './close-parenthesis.tokenizer';
import {NameTokenizer} from './name.tokenizer';
import {NumberTokenizer} from './number.tokenizer';
import {OpenParenthesisTokenizer} from './open-parenthesis.tokenizer';
import {StringTokenizer} from './string.tokenizer';
import {WhiteSpaceTokenizer} from './white-space.tokenizer';

export class Tokenizer {
  constructor(tokenizers = [
    new OpenParenthesisTokenizer(),
    new CloseParenthesisTokenizer(),
    new NumberTokenizer(),
    new NameTokenizer(),
    new StringTokenizer(),
    new WhiteSpaceTokenizer(),
  ]) {
    this.tokenizers = tokenizers;
  }
  tokenize(input) {
    let current = 0;
    const tokens = [];
    while (current < input.length) {
      let tokenized = false;
      this.tokenizers.forEach((tokenizer) => {
        if (tokenized) {
          return;
        }
        const [ length, token ] = tokenizer.tokenize(input, current);
        if (length !== 0) {
          tokenized = true;
          current += length;
        }
        if (token) {
          tokens.push(token);
        }
      });
    }
    return tokens;
  }
}
