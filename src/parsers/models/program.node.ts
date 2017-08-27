import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';

export class ProgramNode extends AbstractNode {
  private type = NodeType.PROGRAM;

  constructor(private nodes: AbstractNode[] = []) {
    super();
  }

  public getType(): NodeType {
    return this.type;
  }

  public getNodes(): AbstractNode[] {
    return this.nodes;
  }

  public addNode(node: AbstractNode): void {
    this.nodes.push(node);
  }
}
