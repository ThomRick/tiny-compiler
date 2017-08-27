import {expect} from 'chai';
import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';
import {ExpressionNode} from './expression.node';
import {NumberNode} from './number.node';

describe('ExpressionNode', () => {
  let node: AbstractNode;
  beforeEach(() => node = new ExpressionNode('add'));
  describe('#getType()', () => {
    it('should return CallExpression node type', () => {
      expect(node.getType()).to.equal(NodeType.EXPRESSION);
    });
  });
  describe('#getName()', () => {
    it('should return the node name', () => {
      expect((node as ExpressionNode).getName()).to.be.equal('add');
    });
  });
  describe('#getNodes()', () => {
    it('should return the node nodes', () => {
      expect((node as ExpressionNode).getNodes()).to.be.deep.equal([]);
    });
  });
  describe('#addNode()', () => {
    it('should add a node to the node', () => {
      (node as ExpressionNode).addNode(new NumberNode('0'));
      expect(node).to.be.deep.equal(new ExpressionNode('add', [ new NumberNode('0') ]));
    });
  });
});
