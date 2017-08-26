import {TokenFactory} from '../../../utils/token.factory';
import {TokenType} from '../../../utils/token.type';

export class StringTokenizer {
  constructor() {}

  tokenize(input, current) {
    if (input[current] === '"') {
      return this.buildToken(input, current);
    }
    return TokenFactory.nullToken();
  }

  buildToken(input, current) {
    let value = '';
    let charIndex = 1;
    let length = 2;
    let char = input[current + charIndex];
    while (char !== '"') {
      if (char === undefined) {
        throw new Error('unterminated string');
      }
      value += char;
      length++;
      charIndex++;
      char = input[current + charIndex];
    }
    return [length, {type: TokenType.STRING, value}];
  }
}
