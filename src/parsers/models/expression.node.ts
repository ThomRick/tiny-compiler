import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';

export class ExpressionNode extends AbstractNode {
  private type = NodeType.EXPRESSION;

  constructor(private name: string, private nodes: AbstractNode[] = []) {
    super();
  }

  public getType(): NodeType {
    return this.type;
  }

  public getName(): string {
    return this.name;
  }

  public getNodes(): AbstractNode[] {
    return this.nodes;
  }

  public addNode(node: AbstractNode): void {
    this.nodes.push(node);
  }
}
