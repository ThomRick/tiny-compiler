import {TokenFactory} from '../../utils/token.factory';

export class CharacterTokenizer {
  constructor() {}

  tokenize(type, value, input, current) {
    return (value === input[current]) ? [ 1, { type, value } ] : TokenFactory.nullToken();
  }
}
