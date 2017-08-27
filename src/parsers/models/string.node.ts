import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';

export class StringNode extends AbstractNode {
  private type = NodeType.STRING;

  constructor(private value: string, body: AbstractNode[] = []) {
    super(body);
  }

  public getType(): NodeType {
    return this.type;
  }

  public getValue(): string {
    return this.value;
  }
}
