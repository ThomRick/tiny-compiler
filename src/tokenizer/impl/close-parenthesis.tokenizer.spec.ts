import {expect} from 'chai';
import {CloseParenthesisToken} from '../models/close-parenthesis.token';
import {NullToken} from '../models/null.token';
import {ITokenizer} from '../tokenizer.interface';
import {CloseParenthesisTokenizer} from './close-parenthesis.tokenizer';

describe('CloseParenthesisTokenizer', () => {
  let tokenizer: ITokenizer;
  beforeEach(() => {
    tokenizer = new CloseParenthesisTokenizer();
  });
  describe('#tokenize()', () => {
    it('should return a close parenthesis token', () => {
      expect(tokenizer.tokenize(')')).to.be.deep.equal(new CloseParenthesisToken());
    });
    it('should return a null token', () => {
      expect(tokenizer.tokenize('a')).to.be.deep.equal(new NullToken());
    });
  });
});
