import {expect} from 'chai';
import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';
import {NumberNode} from './number.node';

describe('NumberNode', () => {
  let node: AbstractNode;
  beforeEach(() => node = new NumberNode());
  describe('#getType()', () => {
    it('should return a NumberLiteral node type', () => {
      expect(node.getType()).to.equal(NodeType.NUMBER);
    });
  });
});
