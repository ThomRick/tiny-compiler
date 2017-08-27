import {NodeType} from '../enums/node-type.enum';
import {AbstractNode} from './abstract.node';

export class ProgramNode extends AbstractNode {
  private type = NodeType.PROGRAM;

  public getType(): NodeType {
    return this.type;
  }
}
