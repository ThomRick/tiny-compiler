import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';

describe('AbstractToken', () => {
  class TestToken extends AbstractToken {
    public getType(): TokenType {
      throw new Error('Method not implemented.');
    }
  }
  describe('#getValue()', () => {
    it('should return the token value', () => {
      const token = new TestToken('value');
      expect(token.getValue()).to.be.equal('value');
    });
  });
  describe('#length()', () => {
    it('should return the token value length', () => {
      const token = new TestToken('value');
      expect(token.length()).to.be.equal(5);
    });
  });
});
