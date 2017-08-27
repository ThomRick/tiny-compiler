import {expect} from 'chai';
import {TokenType} from '../../utils/token.type';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';
import {TokenizerImpl} from './tokenizer.impl';

describe('TokenizerImpl', () => {
  let tokenizer: ITokenizer;

  beforeEach(() => {
    tokenizer = new TokenizerImpl();
  });

  describe('#tokenize()', () => {
    context('(add 2 3)', () => {
      it('should return the expected tokens', () => {
        const input = '(add 2 3)';
        const expectedTokens = [
          new Token(TokenType.PARENTHESIS, '('),
          new Token(TokenType.NAME, 'add'),
          new Token(TokenType.NUMBER, '2'),
          new Token(TokenType.NUMBER, '3'),
          new Token(TokenType.PARENTHESIS, ')'),
        ];
        expect(tokenizer.tokenize(input)).to.be.deep.equal(expectedTokens);
      });
    });
    context('(add 2', () => {
      it('should return the expected tokens', () => {
        const input = '(add 2';
        const expectedTokens = [
          new Token(TokenType.PARENTHESIS, '('),
          new Token(TokenType.NAME, 'add'),
          new Token(TokenType.NUMBER, '2'),
        ];
        expect(tokenizer.tokenize(input)).to.be.deep.equal(expectedTokens);
      });
    });
    context('(add 2 (subtract "314" 2))', () => {
      it('should return the expected tokens', () => {
        const input = '(add 2 (subtract "314" 2))';
        const expectedTokens = [
          new Token(TokenType.PARENTHESIS, '('),
          new Token(TokenType.NAME, 'add'),
          new Token(TokenType.NUMBER, '2'),
          new Token(TokenType.PARENTHESIS, '('),
          new Token(TokenType.NAME, 'subtract'),
          new Token(TokenType.STRING, '314'),
          new Token(TokenType.NUMBER, '2'),
          new Token(TokenType.PARENTHESIS, ')'),
          new Token(TokenType.PARENTHESIS, ')'),
        ];
        expect(tokenizer.tokenize(input)).to.be.deep.equal(expectedTokens);
      });
    });
  });
});
