import {expect} from 'chai';
import {AbstractToken} from './abstract.token';
import {NullToken} from './null.token';

describe('NullToken', () => {
  describe('#getType()', () => {
    it('should return a null token type', () => {
      const token: AbstractToken = new NullToken();
      expect(token.getType()).to.be.equal(null);
    });
  });
  describe('#length()', () => {
    it('should return 0', () => {
      const token: AbstractToken = new NullToken();
      expect(token.length()).to.be.equal(0);
    });
  });
});
