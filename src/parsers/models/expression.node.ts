import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';

export class ExpressionNode extends AbstractNode {
  private type = NodeType.EXPRESSION;

  constructor(private name: string, body = []) {
    super(body);
  }

  public getType(): NodeType {
    return this.type;
  }

  public getName(): string {
    return this.name;
  }
}
