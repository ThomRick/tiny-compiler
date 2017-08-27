import {expect} from 'chai';
import {TokenType} from '../../tokenizer/enums/token-type.enum';
import {Token} from '../../tokenizer/models/token.model';
import {ExpressionNode} from '../models/expression.node';
import {NumberNode} from '../models/number.node';
import {ProgramNode} from '../models/program.node';
import {StringNode} from '../models/string.node';
import {IParser} from '../parser.interface';
import {LispParser} from './lisp.parser';

describe('LispParser', () => {
  let parser: IParser;
  beforeEach(() => {
    parser = new LispParser();
  });
  describe('#parse()', () => {
    it('should return a empty body Program node when tokens is an empty list', () => {
      const tokens: Token[] = [];
      expect(parser.parse(tokens)).to.be.deep.equal(new ProgramNode());
    });
    context('2 3', () => {
      it('should return the expected nodes', () => {
        const tokens: Token[] = [
          new Token(TokenType.NUMBER, '2'),
          new Token(TokenType.NUMBER, '3'),
        ];
        expect(parser.parse(tokens))
          .to.be.deep.equal(
          new ProgramNode([
            new NumberNode('2'),
            new NumberNode('3'),
          ]),
        );
      });
    });
    context('Hello World', () => {
      it('should return the expected nodes', () => {
        const tokens: Token[] = [
          new Token(TokenType.STRING, 'Hello'),
          new Token(TokenType.STRING, 'World'),
        ];
        expect(parser.parse(tokens))
          .to.be.deep.equal(
          new ProgramNode([
            new StringNode('Hello'),
            new StringNode('World'),
          ]),
        );
      });
    });
    context('(add 2 3)', () => {
      it('should return the expected nodes', () => {
        const tokens: Token[] = [
          new Token(TokenType.PARENTHESIS, '('),
          new Token(TokenType.NAME, 'add'),
          new Token(TokenType.NUMBER, '2'),
          new Token(TokenType.NUMBER, '3'),
          new Token(TokenType.PARENTHESIS, ')'),
        ];
        expect(parser.parse(tokens))
          .to.be.deep.equal(
            new ProgramNode([
              new ExpressionNode('add', [
                new NumberNode('2'),
                new NumberNode('3'),
              ]),
            ]),
        );
      });
    });
    context('(add 2 (subtract 4 1))', () => {
      it('should return the expected nodes', () => {
        const tokens: Token[] = [
          new Token(TokenType.PARENTHESIS, '('),
          new Token(TokenType.NAME, 'add'),
          new Token(TokenType.NUMBER, '2'),
          new Token(TokenType.PARENTHESIS, '('),
          new Token(TokenType.NAME, 'subtract'),
          new Token(TokenType.NUMBER, '4'),
          new Token(TokenType.NUMBER, '1'),
          new Token(TokenType.PARENTHESIS, ')'),
          new Token(TokenType.PARENTHESIS, ')'),
        ];
        expect(parser.parse(tokens))
          .to.be.deep.equal(
          new ProgramNode([
            new ExpressionNode('add', [
              new NumberNode('2'),
              new ExpressionNode('subtract', [
                new NumberNode('4'),
                new NumberNode('1'),
              ]),
            ]),
          ]),
        );
      });
    });
  });
});
