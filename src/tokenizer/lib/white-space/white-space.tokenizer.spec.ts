import {expect} from 'chai';
import {TokenFactory} from '../../../utils/token.factory';
import {WhiteSpaceTokenizer} from './white-space.tokenizer';

describe('WhiteSpaceTokenizer', () => {
  describe('#tokenize()', () => {
    let tokenizer;

    beforeEach(() => {
      tokenizer = new WhiteSpaceTokenizer();
    });

    context('input start with a white space character', () => {
      it('should return a white space token', () => {
        expect(tokenizer.tokenize(' ', 0)).to.be.deep.equal(TokenFactory.whiteSpace());
      });
    });
    context('input doesn\'t start by a white space character', () => {
      it('should return a null token', () => {
        expect(tokenizer.tokenize('abc ', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
  });

});