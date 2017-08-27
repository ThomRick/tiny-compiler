import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';
import {CloseParenthesisTokenizer} from './close-parenthesis.tokenizer';

describe('CloseParenthesisTokenizer', () => {
  let tokenizer: ITokenizer;
  beforeEach(() => {
    tokenizer = new CloseParenthesisTokenizer();
  });
  describe('#tokenize()', () => {
    it('should return a close parenthesis token', () => {
      expect(tokenizer.tokenize(')')).to.be.deep.equal(new Token(TokenType.PARENTHESIS, ')'));
    });
    it('should return a null token', () => {
      expect(tokenizer.tokenize('a')).to.be.deep.equal(new Token());
    });
  });
});
