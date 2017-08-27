import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';
import {OpenParenthesisTokenizer} from './open-parenthesis.tokenizer';

describe('OpenParenthesisTokenizer', () => {
  let tokenizer: ITokenizer;
  beforeEach(() => {
    tokenizer = new OpenParenthesisTokenizer();
  });
  describe('#tokenize()', () => {
    it('should return a open parenthesis token', () => {
      expect(tokenizer.tokenize('(')).to.be.deep.equal(new Token(TokenType.PARENTHESIS, '('));
    });
    it('should return a null token', () => {
      expect(tokenizer.tokenize('a')).to.be.deep.equal(new Token());
    });
  });
});