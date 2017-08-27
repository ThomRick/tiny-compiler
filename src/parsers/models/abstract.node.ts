import {NodeType} from '../enums/node-type.enum';

export abstract class AbstractNode {
  constructor() {}
  public abstract getType(): NodeType;
}
