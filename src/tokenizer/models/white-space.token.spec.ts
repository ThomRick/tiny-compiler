import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';
import {WhiteSpaceToken} from './white-space.token';

describe('WhiteSpaceToken', () => {
  describe('#getType()', () => {
    it('should return a parenthesis token type', () => {
      const token: AbstractToken = new WhiteSpaceToken();
      expect(token.getType()).to.be.equal(TokenType.WHITE_SPACE);
    });
  });
});
