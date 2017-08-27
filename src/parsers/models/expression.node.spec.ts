import {expect} from 'chai';
import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';
import {ExpressionNode} from './expression.node';

describe('ExpressionNode', () => {
  let node: AbstractNode;
  beforeEach(() => node = new ExpressionNode('add'));
  describe('#getType()', () => {
    it('should return CallExpression node type', () => {
      expect(node.getType()).to.equal(NodeType.EXPRESSION);
    });
  });
});
