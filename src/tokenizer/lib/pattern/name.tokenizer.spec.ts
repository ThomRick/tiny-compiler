import {expect} from 'chai';
import {NameTokenizer} from './name.tokenizer';
import {PatternTokenizer} from './pattern.tokenizer';
import {TokenFactory} from '../../../utils/token.factory';

describe('NameTokenizer', () => {
  let tokenizer;

  beforeEach(() => {
    tokenizer = new NameTokenizer();
  });

  describe('#constructor()', () => {
    it('should have a PatternTokenizer', () => {
      expect(tokenizer.tokenizer).to.be.deep.equal(new PatternTokenizer());
    });
  });

  describe('#tokenize()', () => {
    const NAME_PATTERN_TOKEN = [ 3, { type: 'name', value: 'abc' }];
    context('input contains only name pattern characters', () => {
      it('should return a pattern token', () => {
        expect(tokenizer.tokenize('abc', 0)).to.be.deep.equal(NAME_PATTERN_TOKEN);
      });
    });
    context('input doens\'t contain only name pattern characters', () => {
      it('should return a pattern token', () => {
        expect(tokenizer.tokenize('abc123', 0)).to.be.deep.equal(NAME_PATTERN_TOKEN);
      });
    });
    context('input doesn\'t contain any name pattern character', () => {
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize('123', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
    context('input doesn\'t start with a name pattern character', () => {
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize('123abc', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
  });
});