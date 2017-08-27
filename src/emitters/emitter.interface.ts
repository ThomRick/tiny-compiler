import {AbstractNode} from '../parsers/models/abstract.node';

export interface IEmitter {
  emit(node: AbstractNode): string;
}
