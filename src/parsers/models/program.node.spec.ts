import {expect} from 'chai';
import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';
import {ProgramNode} from './program.node';
import {NumberNode} from './number.node';

describe('ProgramNode', () => {
  let node: AbstractNode;
  beforeEach(() => node = new ProgramNode());
  describe('#getType()', () => {
    it('should return a Program node type', () => {
      expect(node.getType()).to.equal(NodeType.PROGRAM);
    });
  });
  describe('#getNodes()', () => {
    it('should return the program nodes', () => {
      expect((node as ProgramNode).getNodes()).to.deep.equal([]);
    });
  });
  describe('#addNode()', () => {
    it('should add a node to the node', () => {
      (node as ProgramNode).addNode(new NumberNode('0'));
      expect(node).to.be.deep.equal(new ProgramNode([ new NumberNode('0') ]));
    });
  });
});
