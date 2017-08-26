import {CloseParenthesisTokenizer} from './lib/character/close-parenthesis.tokenizer';
import {OpenParenthesisTokenizer} from './lib/character/open-parenthesis.tokenizer';
import {NameTokenizer} from './lib/pattern/name.tokenizer';
import {NumberTokenizer} from './lib/pattern/number.tokenizer';
import {StringTokenizer} from './lib/string/string.tokenizer';
import {WhiteSpaceTokenizer} from './lib/white-space/white-space.tokenizer';

export class Tokenizer {

  constructor(private tokenizers = [
    new OpenParenthesisTokenizer(),
    new CloseParenthesisTokenizer(),
    new NumberTokenizer(),
    new NameTokenizer(),
    new StringTokenizer(),
    new WhiteSpaceTokenizer(),
  ]) {
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
