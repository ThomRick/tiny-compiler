import {expect} from 'chai';
import {AbstractToken} from '../../tokenizer/models/abstract.token';
import {CloseParenthesisToken} from '../../tokenizer/models/close-parenthesis.token';
import {NameToken} from '../../tokenizer/models/name.token';
import {NumberToken} from '../../tokenizer/models/number.token';
import {OpenParenthesisToken} from '../../tokenizer/models/open-parenthesis.token';
import {StringToken} from '../../tokenizer/models/string.token';
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
      const tokens: AbstractToken[] = [];
      expect(parser.parse(tokens)).to.be.deep.equal(new ProgramNode());
    });
    context('2 3', () => {
      it('should return the expected nodes', () => {
        const tokens: AbstractToken[] = [
          new NumberToken('2'),
          new NumberToken('3'),
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
        const tokens: AbstractToken[] = [
          new StringToken('Hello'),
          new StringToken('World'),
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
        const tokens: AbstractToken[] = [
          new OpenParenthesisToken(),
          new NameToken('add'),
          new NumberToken('2'),
          new NumberToken('3'),
          new CloseParenthesisToken(),
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
        const tokens: AbstractToken[] = [
          new OpenParenthesisToken(),
          new NameToken('add'),
          new NumberToken('2'),
          new OpenParenthesisToken(),
          new NameToken('subtract'),
          new NumberToken('4'),
          new NumberToken('1'),
          new CloseParenthesisToken(),
          new CloseParenthesisToken(),
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
