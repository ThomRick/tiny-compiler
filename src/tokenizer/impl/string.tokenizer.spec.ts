import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';
import {StringTokenizer} from './string.tokenizer';

describe('StringTokenizer', () => {
  let tokenizer: ITokenizer;
  beforeEach(() => {
    tokenizer = new StringTokenizer();
  });
  describe('#tokenize()', () => {
    const outputToken = new Token(TokenType.STRING, 'Hello World');

    context('input contains only string character', () => {
      it('should return a string token', () => {
        expect(tokenizer.tokenize('"Hello World"')).to.be.deep.equal(outputToken);
      });
    });
    context('input doesn\'t contain any string character', () => {
      it('should return a null token', () => {
        expect(tokenizer.tokenize('123abc')).to.be.deep.equal(new Token());
      });
    });
    context('input doesn\'t start by a string character', () => {
      it('should return a null token', () => {
        expect(tokenizer.tokenize('abc"Hello World"')).to.be.deep.equal(new Token());
      });
    });
    context('input doesn\'t contain only string character', () => {
      it('should return a string token', () => {
        expect(tokenizer.tokenize('"Hello World"abc123')).to.be.deep.equal(outputToken);
      });
      it('return the first string token', () => {
        expect(tokenizer.tokenize('"Hello World"abc123"Hello World"')).to.be.deep.equal(outputToken);
      });
    });
    context('input contains an Unterminated string token', () => {
      it('should throw an error', () => {
        expect(() => {
          tokenizer.tokenize('"Hello World');
        }).to.throw('Unterminated string');
      });
      it('should not throw error caused by next string token Unterminated', () => {
        expect(() => {
          tokenizer.tokenize('"Hello World"abc123"Hello World');
        }).to.not.throw('Unterminated string');
      });
    });
  });
});
