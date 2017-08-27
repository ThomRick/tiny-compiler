import {expect} from 'chai';
import {NodeType} from '../../utils/node.type';
import {CEmitter} from './c.emitter';

describe('CEmitter', () => {
  let emitter;

  beforeEach(() => {
    emitter = new CEmitter();
  });

  describe('#emit()', () => {
    context('input is an unknown node type', () => {
      it('should throw an Error', () => {
        const node = { type: 'unknown', value: 'unknown' };
        let error;
        try {
          emitter.emit(node);
        } catch (err) {
          error = err;
        }
        expect(error).to.exist;
        expect(error.message).to.be.equal('Unknown node type : unknown');
      });
    });
    context('input is a NumberLiteral node type', () => {
      it('should use emitNumber()', () => {
        const node = { type: NodeType.NUMBER, value: '4' };
        expect(emitter.emit(node)).to.be.equal('4');
      });
    });
    context('input is a StringLiteral node type', () => {
      it('should use emitString()', () => {
        const node = { type: NodeType.STRING, value: 'Hello World' };
        expect(emitter.emit(node)).to.be.equal(`"${'Hello World'}"`);
      });
    });
    context('input is a CallExpression node type', () => {
      it('should use emitExpression()', () => {
        const node = { type: NodeType.EXPRESSION, name: 'add', params: [
          { type: NodeType.NUMBER, value: '4' },
          { type: NodeType.NUMBER, value: '2' }
        ]};
        expect(emitter.emit(node)).to.be.equal('add(4, 2)');
      });
    });
    context('input is a Program node type', () => {
      it('should use emitProgram', () => {
        const node = {
          type: NodeType.PROGRAM,
          body: [
            { type: NodeType.EXPRESSION, name: 'add', params: [
              { type: NodeType.NUMBER, value: '4' },
              { type: NodeType.NUMBER, value: '2' }
            ]}
          ]
        };
        expect(emitter.emit(node)).to.be.equal('add(4, 2);\n');
      });
    })
  });

  describe('#emitNumber()', () => {
    it('should return node value', () => {
      const node = { type: NodeType.NUMBER, value: '4' };
      expect(emitter.emitNumber(node)).to.be.equal('4');
    });
  });

  describe('#emitString()', () => {
    it('should return node value wrapped in a string', () => {
      const node = { type: NodeType.STRING, value: 'Hello World' };
      expect(emitter.emitString(node)).to.be.equal(`"${'Hello World'}"`);
    });
  });

  describe('#emitExpression()', () => {
    it('can call emitExpression()', () => {
      const node = { type: NodeType.EXPRESSION, name: 'add', params: [
        { type: NodeType.NUMBER, value: '4' },
        { type: NodeType.NUMBER, value: '2' }
      ]};
      emitter.emitExpression(node);
    });
    it('should return the c formatted expression', () => {
      const node = { type: NodeType.EXPRESSION, name: 'add', params: [
        { type: NodeType.NUMBER, value: '4' },
        { type: NodeType.NUMBER, value: '2' }
      ]};
      expect(emitter.emitExpression(node)).to.be.equal('add(4, 2)')
    });
  });

  describe('#emitProgram', () => {
    it('should return the c formatted program', () => {
      const node = {
        type: NodeType.PROGRAM,
        body: [
          { type: NodeType.EXPRESSION, name: 'add', params: [
            { type: NodeType.NUMBER, value: '4' },
            { type: NodeType.NUMBER, value: '2' }
          ]}
        ]
      };
      expect(emitter.emitProgram(node)).to.be.equal('add(4, 2);\n');
    });
  });
});