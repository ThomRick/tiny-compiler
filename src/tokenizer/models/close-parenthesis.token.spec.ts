import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';
import {CloseParenthesisToken} from './close-parenthesis.token';

describe('CloseParenthesisToken', () => {
  describe('#getType()', () => {
    it('should return a parenthesis token type', () => {
      const token: AbstractToken = new CloseParenthesisToken();
      expect(token.getType()).to.be.equal(TokenType.PARENTHESIS);
    });
  });
});
