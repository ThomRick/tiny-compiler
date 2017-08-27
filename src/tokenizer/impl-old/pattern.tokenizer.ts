import {TokenFactory} from '../../utils/token.factory';

export class PatternTokenizer {
  constructor() {}

  tokenize(type, pattern, input, current) {
    if (pattern.test(input[current])) {
      return this.buildToken(type, pattern, input, current);
    }
    return TokenFactory.nullToken();
  }

  buildToken(type, pattern, input, current) {
    let length = 0;
    let value = '';
    let char = input[current];
    while (char && pattern.test(char)) {
      value += char;
      length++;
      char = input[current + length];
    }
    return [length, {type, value}];
  }
}
