import {NameTokenizer} from './lib/pattern/name.tokenizer';
import {StringTokenizer} from './lib/string/string.tokenizer';
import {NumberTokenizer} from './lib/pattern/number.tokenizer';
import {WhiteSpaceTokenizer} from './lib/white-space/white-space.tokenizer';
import {OpenParenthesisTokenizer} from './lib/character/open-parenthesis.tokenizer';
import {CloseParenthesisTokenizer} from './lib/character/close-parenthesis.tokenizer';

export class Tokenizer {

  constructor(private tokenizers = [
    new OpenParenthesisTokenizer(),
    new CloseParenthesisTokenizer(),
    new NumberTokenizer(),
    new NameTokenizer(),
    new StringTokenizer(),
    new WhiteSpaceTokenizer()
  ]) {
  }

  tokenize(input) {
    let current = 0;
    let tokens = [];
    while (current < input.length) {
      let tokenized = false;
      this.tokenizers.forEach(tokenizer => {
        if (tokenized)
          return;
        let [ length, token ] = tokenizer.tokenize(input, current);
        if(length !== 0) {
          tokenized = true;
          current += length;
        }
        if(token)
          tokens.push(token);
      });
    }
    return tokens;
  }
}