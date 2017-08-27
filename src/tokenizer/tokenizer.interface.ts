import {Token} from './models/token.model';

export interface ITokenizer {
  tokenize(input: string): Token | Token[];
}
