import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';

export class NumberNode extends AbstractNode {
  private type = NodeType.NUMBER;

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
