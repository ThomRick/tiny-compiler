import {expect} from 'chai';
import {TokenType} from '../enums/token-type.enum';
import {Token} from './token.model';

describe('Token', () => {
  describe('#length()', () => {
    it('should return length of the value', () => {
      const type = TokenType.STRING;
      const value = 'hello';
      expect(new Token(type, value).length()).to.equal(5);
    });
    it('should return a length of 0 if no value', () => {
      expect(new Token().length()).to.equal(0);
    });
  });
});
