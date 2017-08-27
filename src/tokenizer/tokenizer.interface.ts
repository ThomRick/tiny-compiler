import {AbstractToken} from './models/abstract.token';
import {Token} from './models/token.model';

export interface ITokenizer {
  tokenize(input: string): Token | Token[] | AbstractToken | AbstractToken[];
}
