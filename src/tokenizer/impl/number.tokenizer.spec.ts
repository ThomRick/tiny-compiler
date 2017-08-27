import {expect} from 'chai';
import {NullToken} from '../models/null.token';
import {NumberToken} from '../models/number.token';
import {ITokenizer} from '../tokenizer.interface';
import {NumberTokenizer} from './number.tokenizer';

describe('NumberTokenizer', () => {
  let tokenizer: ITokenizer;
  beforeEach(() => {
    tokenizer = new NumberTokenizer();
  });
  describe('#tokenize()', () => {
    const outputToken = new NumberToken('123');
    context('input contains only number characters', () => {
      it('should return a pattern token', () => {
        expect(tokenizer.tokenize('123')).to.be.deep.equal(outputToken);
      });
    });
    context('input doesn\'t contain any number pattern character', () => {
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize('abc')).to.be.deep.equal(new NullToken());
      });
    });
    context('input doesn\'t start with a number pattern character', () => {
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize('abc123')).to.be.deep.equal(new NullToken());
      });
    });
    context('input doens\'t contain only number pattern characters', () => {
      it('should return a pattern token', () => {
        expect(tokenizer.tokenize('123abc')).to.be.deep.equal(outputToken);
      });
      it('should return only the started numbers in token', () => {
        expect(tokenizer.tokenize('123abc456')).to.be.deep.equal(outputToken);
      });
    });
  });
});
