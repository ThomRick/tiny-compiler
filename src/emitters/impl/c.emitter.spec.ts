import {expect} from 'chai';
import {ExpressionNode} from '../../parsers/models/expression.node';
import {NumberNode} from '../../parsers/models/number.node';
import {ProgramNode} from '../../parsers/models/program.node';
import {StringNode} from '../../parsers/models/string.node';
import {IEmitter} from '../emitter.interface';
import {CEmitter} from './c.emitter';

describe('CEmitter', () => {
  let emitter: IEmitter;

  beforeEach(() => emitter = new CEmitter());

  describe('#emit()', () => {
    context('input is a NumberLiteral node type', () => {
      it('should use emitNumber()', () => {
        const node = new NumberNode('4');
        expect(emitter.emit(node)).to.be.equal('4');
      });
    });
    context('input is a StringLiteral node type', () => {
      it('should use emitString()', () => {
        const node = new StringNode('Hello World');
        expect(emitter.emit(node)).to.be.equal(`"${'Hello World'}"`);
      });
    });
    context('input is a CallExpression node type', () => {
      it('should use emitExpression()', () => {
        const node = new ExpressionNode('add', [
          new NumberNode('4'),
          new NumberNode('2'),
        ]);
        expect(emitter.emit(node)).to.be.equal('add(4, 2)');
      });
    });
    context('input is a Program node type', () => {
      it('should use emitProgram', () => {
        const node = new ProgramNode([
          new ExpressionNode('add', [
            new NumberNode('4'),
            new NumberNode('2'),
          ]),
        ]);
        expect(emitter.emit(node)).to.be.equal('add(4, 2);\n');
      });
    });
  });
});
