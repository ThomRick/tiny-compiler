import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';
import {NameToken} from './name.token';

describe('NameToken', () => {
  describe('#getType()', () => {
    it('should return a name token type', () => {
      const token: AbstractToken = new NameToken('value');
      expect(token.getType()).to.be.equal(TokenType.NAME);
    });
  });
});
