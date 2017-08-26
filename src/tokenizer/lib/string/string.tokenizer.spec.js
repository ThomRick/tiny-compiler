import {expect} from 'chai';
import {StringTokenizer} from './string.tokenizer';
import {TokenFactory} from '../../../utils/token.factory';

describe('StringTokenizer', () => {
  describe('#tokenize()', () => {
    const STRING_TOKEN = [ 13, { type: 'string', value: 'Hello World' }];
    let tokenizer;

    beforeEach(() => {
      tokenizer = new StringTokenizer();
    });

    context('input contains only string character', () => {
      it('should return a string token', () => {
        expect(tokenizer.tokenize('"Hello World"', 0)).to.be.deep.equal(STRING_TOKEN);
      });
    });
    context('input doesn\'t contain any string character', () => {
      it('should return a null token', () => {
        expect(tokenizer.tokenize('123abc', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
    context('input doesn\'t contain only string character', () => {
      it('should return a string token', () => {
        expect(tokenizer.tokenize('"Hello World"abc123', 0)).to.be.deep.equal(STRING_TOKEN);
      });
    });
    context('input doesn\'t start by a string character', () => {
      it('should return a null token', () => {
        expect(tokenizer.tokenize('abc"Hello World"', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
    context('input contains an unterminated string character', () => {
      it('should throw an error', () => {
        try {
          tokenizer.tokenize('"Hello World', 0);
        } catch (error) {
          expect(error).to.exist;
          expect(error.message).to.be.equal('unterminated string');
        }
      });
    });
  });
});