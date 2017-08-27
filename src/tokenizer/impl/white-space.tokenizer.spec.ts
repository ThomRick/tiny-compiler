import {expect} from 'chai';
import {NullToken} from '../models/null.token';
import {WhiteSpaceToken} from '../models/white-space.token';
import {ITokenizer} from '../tokenizer.interface';
import {WhiteSpaceTokenizer} from './white-space.tokenizer';

describe('WhiteSpaceTokenizer', () => {
  describe('#tokenize()', () => {
    let tokenizer: ITokenizer;
    beforeEach(() => {
      tokenizer = new WhiteSpaceTokenizer();
    });
    context('input start with a white space character', () => {
      it('should return a white space token', () => {
        expect(tokenizer.tokenize(' ')).to.be.deep.equal(new WhiteSpaceToken());
      });
    });
    context('input doesn\'t start by a white space character', () => {
      it('should return a null token', () => {
        expect(tokenizer.tokenize('abc ')).to.be.deep.equal(new NullToken());
      });
    });
  });
});
