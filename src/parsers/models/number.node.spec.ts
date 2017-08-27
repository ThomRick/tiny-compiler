import {expect} from 'chai';
import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';
import {NumberNode} from './number.node';

describe('NumberNode', () => {
  let node: AbstractNode;
  beforeEach(() => node = new NumberNode('0'));
  describe('#getType()', () => {
    it('should return a NumberLiteral node type', () => {
      expect(node.getType()).to.equal(NodeType.NUMBER);
    });
  });
  describe('#getValue()', () => {
    it('should return a NumberLiteral node type', () => {
      expect((node as NumberNode).getValue()).to.equal('0');
    });
  });
});
