import {expect} from 'chai';
import {CloseParenthesisToken} from '../models/close-parenthesis.token';
import {NameToken} from '../models/name.token';
import {NumberToken} from '../models/number.token';
import {OpenParenthesisToken} from '../models/open-parenthesis.token';
import {StringToken} from '../models/string.token';
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
          new OpenParenthesisToken(),
          new NameToken('add'),
          new NumberToken('2'),
          new NumberToken('3'),
          new CloseParenthesisToken(),
        ];
        expect(tokenizer.tokenize(input)).to.be.deep.equal(expectedTokens);
      });
    });
    context('(add 2', () => {
      it('should return the expected tokens', () => {
        const input = '(add 2';
        const expectedTokens = [
          new OpenParenthesisToken(),
          new NameToken('add'),
          new NumberToken('2'),
        ];
        expect(tokenizer.tokenize(input)).to.be.deep.equal(expectedTokens);
      });
    });
    context('(add 2 (subtract "314" 2))', () => {
      it('should return the expected tokens', () => {
        const input = '(add 2 (subtract "314" 2))';
        const expectedTokens = [
          new OpenParenthesisToken(),
          new NameToken('add'),
          new NumberToken('2'),
          new OpenParenthesisToken(),
          new NameToken('subtract'),
          new StringToken('314'),
          new NumberToken('2'),
          new CloseParenthesisToken(),
          new CloseParenthesisToken(),
        ];
        expect(tokenizer.tokenize(input)).to.be.deep.equal(expectedTokens);
      });
    });
  });
});
