import {AbstractToken} from './models/abstract.token';

export interface ITokenizer {
  tokenize(input: string): AbstractToken | AbstractToken[];
}
