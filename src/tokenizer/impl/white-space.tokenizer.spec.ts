import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';
import {WhiteSpaceTokenizer} from './white-space.tokenizer';

describe('WhiteSpaceTokenizer', () => {
  describe('#tokenize()', () => {
    let tokenizer: ITokenizer;
    beforeEach(() => {
      tokenizer = new WhiteSpaceTokenizer();
    });
    context('input start with a white space character', () => {
      it('should return a white space token', () => {
        expect(tokenizer.tokenize(' ')).to.be.deep.equal(new Token(TokenType.WHITE_SPACE, ' '));
      });
    });
    context('input doesn\'t start by a white space character', () => {
      it('should return a null token', () => {
        expect(tokenizer.tokenize('abc ')).to.be.deep.equal(new Token());
      });
    });
  });
});
