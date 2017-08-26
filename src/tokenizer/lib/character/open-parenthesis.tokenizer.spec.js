import {expect} from 'chai';
import {TokenFactory} from '../../../utils/token.factory';
import {OpenParenthesisTokenizer} from './open-parenthesis.tokenizer';
import {CharacterTokenizer} from './character.tokenizer';

describe('OpenParenthesisTokenizer', () => {
  let tokenizer;

  beforeEach(() => {
    tokenizer = new OpenParenthesisTokenizer();
  });

  describe('#constructor', () => {
    it('should have a character tokenizer', () => {
      expect(tokenizer.tokenizer).to.be.deep.equal(new CharacterTokenizer());
    });
  });

  describe('#tokenize()', () => {
    it('should return a open parenthesis token', () => {
      expect(tokenizer.tokenize('(', 0)).to.be.deep.equal(TokenFactory.openedParenthesis());
    });
    it('should return a null token', () => {
      expect(tokenizer.tokenize('a', 0)).to.be.deep.equal(TokenFactory.nullToken());
    });
  });
});