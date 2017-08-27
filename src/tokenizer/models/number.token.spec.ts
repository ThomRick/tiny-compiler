import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';
import {NumberToken} from './number.token';

describe('NumberToken', () => {
  describe('#getType()', () => {
    it('should return a number token type', () => {
      const token: AbstractToken = new NumberToken('value');
      expect(token.getType()).to.be.equal(TokenType.NUMBER);
    });
  });
});
