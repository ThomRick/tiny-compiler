import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';
import {OpenParenthesisToken} from './open-parenthesis.token';

describe('OpenParenthesisToken', () => {
  describe('#getType()', () => {
    it('should return a parenthesis token type', () => {
      const token: AbstractToken = new OpenParenthesisToken();
      expect(token.getType()).to.be.equal(TokenType.PARENTHESIS);
    });
  });
});
