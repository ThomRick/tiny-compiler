import {expect} from 'chai';
import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';
import {StringNode} from './string.node';

describe('StringNode', () => {
  let node: AbstractNode;
  beforeEach(() => node = new StringNode());
  describe('#getType()', () => {
    it('should return a StringLiteral node type', () => {
      expect(node.getType()).to.equal(NodeType.STRING);
    });
  });
});
