import {expect} from 'chai';
import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';
import {ProgramNode} from './program.node';

describe('ProgramNode', () => {
  let node: AbstractNode;
  beforeEach(() => node = new ProgramNode());
  describe('#getType()', () => {
    it('should return a Program node type', () => {
      expect(node.getType()).to.equal(NodeType.PROGRAM);
    });
  });
});
