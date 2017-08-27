import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';
import {StringToken} from './string.token';

describe('StringToken', () => {
  describe('#getType()', () => {
    it('should return a parenthesis token type', () => {
      const token: AbstractToken = new StringToken('value');
      expect(token.getType()).to.be.equal(TokenType.STRING);
    });
  });
});
