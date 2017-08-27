import {expect} from 'chai';
import {TokenType} from '../../utils/token.type';
import {CloseParenthesisTokenizer} from './close-parenthesis.tokenizer';
import {NameTokenizer} from './name.tokenizer';
import {NumberTokenizer} from './number.tokenizer';
import {OpenParenthesisTokenizer} from './open-parenthesis.tokenizer';
import {StringTokenizer} from './string.tokenizer';
import {Tokenizer} from './tokenizer';
import {WhiteSpaceTokenizer} from './white-space.tokenizer';

describe('Tokenizer', () => {
  let tokenizer;

  beforeEach(() => {
    tokenizer = new Tokenizer();
  });

  describe('#contructor()', () => {
    it('should have a tokenizer array', () => {
      const tokenizers = [
        new OpenParenthesisTokenizer(),
        new CloseParenthesisTokenizer(),
        new NumberTokenizer(),
        new NameTokenizer(),
        new StringTokenizer(),
        new WhiteSpaceTokenizer(),
      ];
      expect(tokenizer.tokenizers).to.be.deep.equal(tokenizers);
    });

  });
  describe('#tokenize()', () => {
    context('(add 2 3)', () => {
      it('should return the expected tokens', () => {
        const input = '(add 2 3)';
        const expectedTokens = [
          { type: TokenType.PARENTHESIS, value: '('   },
          { type: TokenType.NAME,        value: 'add' },
          { type: TokenType.NUMBER,      value: '2'   },
          { type: TokenType.NUMBER,      value: '3'   },
          { type: TokenType.PARENTHESIS, value: ')'   },
        ];
        expect(tokenizer.tokenize(input)).to.be.deep.equal(expectedTokens);
      });
    });
    context('(add 2', () => {
      it('should return the expected tokens', () => {
        const input = '(add 2';
        const expectedTokens = [
          { type: TokenType.PARENTHESIS, value: '('   },
          { type: TokenType.NAME,        value: 'add' },
          { type: TokenType.NUMBER,      value: '2'   },
        ];
        expect(tokenizer.tokenize(input)).to.be.deep.equal(expectedTokens);
      });
    });
    context('(add 2 (subtract "314" 2))', () => {
      it('should return the expected tokens', () => {
        const input = '(add 2 (subtract "314" 2))';
        const expectedTokens = [
          { type: TokenType.PARENTHESIS, value: '('        },
          { type: TokenType.NAME,        value: 'add'      },
          { type: TokenType.NUMBER,      value: '2'        },
          { type: TokenType.PARENTHESIS, value: '('        },
          { type: TokenType.NAME,        value: 'subtract' },
          { type: TokenType.STRING,      value: '314'      },
          { type: TokenType.NUMBER,      value: '2'        },
          { type: TokenType.PARENTHESIS, value: ')'        },
          { type: TokenType.PARENTHESIS, value: ')'        },
        ];
        expect(tokenizer.tokenize(input)).to.be.deep.equal(expectedTokens);
      });
    });
  });
});
