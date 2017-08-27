import {expect} from 'chai';
import {NullToken} from '../models/null.token';
import {OpenParenthesisToken} from '../models/open-parenthesis.token';
import {ITokenizer} from '../tokenizer.interface';
import {OpenParenthesisTokenizer} from './open-parenthesis.tokenizer';

describe('OpenParenthesisTokenizer', () => {
  let tokenizer: ITokenizer;
  beforeEach(() => {
    tokenizer = new OpenParenthesisTokenizer();
  });
  describe('#tokenize()', () => {
    it('should return a open parenthesis token', () => {
      expect(tokenizer.tokenize('(')).to.be.deep.equal(new OpenParenthesisToken());
    });
    it('should return a null token', () => {
      expect(tokenizer.tokenize('a')).to.be.deep.equal(new NullToken());
    });
  });
});
