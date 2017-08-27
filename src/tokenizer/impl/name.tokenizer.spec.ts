import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';
import {NameTokenizer} from './name.tokenizer';

describe('NameTokenizer', () => {
  let tokenizer: ITokenizer;
  beforeEach(() => {
    tokenizer = new NameTokenizer();
  });
  describe('#tokenize()', () => {
    const outputToken = new Token(TokenType.NAME, 'abc');
    context('input contains only name pattern characters', () => {
      it('should return a pattern token', () => {
        expect(tokenizer.tokenize('abc')).to.be.deep.equal(outputToken);
      });
    });
    context('input doesn\'t contain any name pattern character', () => {
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize('123')).to.be.deep.equal(new Token());
      });
    });
    context('input doesn\'t start with a name pattern character', () => {
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize('123abc')).to.be.deep.equal(new Token());
      });
    });
    context('input doens\'t contain only name pattern characters', () => {
      it('should return a pattern token', () => {
        expect(tokenizer.tokenize('abc123')).to.be.deep.equal(outputToken);
      });
      it('should return only the started name in token', () => {
        expect(tokenizer.tokenize('abc123def')).to.be.deep.equal(outputToken);
      });
    });
  });
});
