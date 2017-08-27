import {PatternTokenizer} from './pattern.tokenizer';
import {TokenFactory} from '../../utils/token.factory';
import {TokenType} from '../../utils/token.type';
import {PatternEnum} from '../../utils/pattern.enum';
import {expect} from 'chai';

describe('PatternTokenizer', () => {
  describe('#tokenize()', () => {
    let tokenizer;

    beforeEach(() => {
      tokenizer = new PatternTokenizer();
    });
    context('input doesn\'t contain any pattern match character', () => {
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize(TokenType.PARENTHESIS, PatternEnum.NUMBER, '(', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
    context('input contains number pattern characters', () => {
      const NUMBER_PATTERN_TOKEN = [ 3, { type: 'number', value: '123' }];
      it('should return a number pattern token', () => {
        expect(tokenizer.tokenize(TokenType.NUMBER, PatternEnum.NUMBER, '123', 0)).to.be.deep.equal(NUMBER_PATTERN_TOKEN);
      });
      it('should return a number pattern token', () => {
        expect(tokenizer.tokenize(TokenType.NUMBER, PatternEnum.NUMBER, '123abc', 0)).to.be.deep.equal(NUMBER_PATTERN_TOKEN);
      });
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize(TokenType.NUMBER, PatternEnum.NUMBER, 'abc', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize(TokenType.NUMBER, PatternEnum.NUMBER, 'abc123', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
    context('input contains name pattern characters', () => {
      const NAME_PATTERN_TOKEN = [ 3, { type: 'name', value: 'abc' }];
      it('should return a name pattern token', () => {
        expect(tokenizer.tokenize(TokenType.NAME, PatternEnum.NAME, 'abc', 0)).to.be.deep.equal(NAME_PATTERN_TOKEN);
      });
      it('should return a name pattern token', () => {
        expect(tokenizer.tokenize(TokenType.NAME, PatternEnum.NAME, 'abc123', 0)).to.be.deep.equal(NAME_PATTERN_TOKEN);
      });
      it('should return a null name pattern token', () => {
        expect(tokenizer.tokenize(TokenType.NAME, PatternEnum.NAME, '123', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
      it('should return a null pattern token', () => {
        expect(tokenizer.tokenize(TokenType.NAME, PatternEnum.NAME, '123abc', 0)).to.be.deep.equal(TokenFactory.nullToken());
      });
    });
  });
});
