import {expect} from 'chai';
import NumberTokenizer from './number.tokenizer';
import PatternTokenizer from './pattern.tokenizer';
import TokenFactory from '../../../utils/token.factory';

describe('NumberTokenizer', () => {
  let tokenizer;

  beforeEach(() => {
    tokenizer = new NumberTokenizer();
  });

  describe('#constructor()', () => {
    it('should have a PatternTokenizer', () => {
      expect(tokenizer.tokenizer).to.be.deep.equal(new PatternTokenizer());
    });
  });

  describe('#tokenize()', () => {
    const NUMBER_PATTERN_TOKEN = [ 3, { type: 'number', value: '123' }];
    context('input contains only number characters', () => {
      it('should return a pattern token', () => {
        expect(tokenizer.tokenize('123', 0)).to.be.deep.equal(NUMBER_PATTERN_TOKEN);
      });
    });
    context('input doens\'t contain only number pattern characters', () => {
      it('should return a pattern token', () => {
        expect(tokenizer.tokenize('123abc', 0)).to.be.deep.equal(NUMBER_PATTERN_TOKEN);
      });
    });
    context('input doesn\'t contain any number pattern character', () => {
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize('abc')).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
    context('input doesn\'t start with a number pattern character', () => {
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize('abc123')).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
  });
});