import {expect} from 'chai';
import TokenFactory from '../../../utils/token.factory';
import CharacterTokenizer from './character.tokenizer';
import CloseParenthesisTokenizer from './close-parenthesis.tokenizer';

describe('CloseParenthesisTokenizer', () => {
  let tokenizer;

  beforeEach(() => {
    tokenizer = new CloseParenthesisTokenizer();
  });

  describe('#constructor()', () => {
    it('should have a CharacterTokenizer', () => {
      expect(tokenizer.tokenizer).to.be.deep.equal(new CharacterTokenizer());
    });
  });

  describe('#tokenize()', () => {
    it('should return a close parenthesis token', () => {
      expect(tokenizer.tokenize(')', 0)).to.be.deep.equal(TokenFactory.closedParenthesis());
    });
    it('should return a null token', () => {
      expect(tokenizer.tokenize('a', 0)).to.be.deep.equal(TokenFactory.nullToken());
    });
  });
});