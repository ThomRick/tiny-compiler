import {NodeType} from '../enums/node-type.enum';

export abstract class AbstractNode {
  constructor(private body: AbstractNode[] = []) {}

  public abstract getType(): NodeType;

  public getNodes(): AbstractNode[] {
    return this.body;
  }

  public addNode(node: AbstractNode) {
    this.body.push(node);
  }
}
