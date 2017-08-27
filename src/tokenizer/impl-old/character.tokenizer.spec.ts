import {expect} from 'chai';
import {TokenType} from '../../utils/token.type';
import {TokenFactory} from '../../utils/token.factory';
import {CharacterTokenizer} from './character.tokenizer';

describe('CharacterTokenizer', () => {
  describe('#tokenize()', () => {
    let tokenizer;

    beforeEach(() => {
      tokenizer = new CharacterTokenizer();
    });

    context('input is not a character', () => {
      it('should return a null token', () => {
        expect(tokenizer.tokenize(TokenType.PARENTHESIS, '(', 'a', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
    context('input is a character', () => {
      it('should return an open parenthesis character token', () => {
        expect(tokenizer.tokenize(TokenType.PARENTHESIS, '(', '(', 0)).to.be.deep.equal(TokenFactory.openedParenthesis());
      });
      it('should return a close parenthesis character token', () => {
        expect(tokenizer.tokenize(TokenType.PARENTHESIS, ')', ')', 0)).to.be.deep.equal(TokenFactory.closedParenthesis());
      });
    });
  });
});
