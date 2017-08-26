import {NodeType} from '../utils/node.type';

export class CEmitter {
  constructor() {}

  emit(node) {
    switch (node.type) {
      case NodeType.NUMBER:
        return this.emitNumber(node);
      case NodeType.STRING:
        return this.emitString(node);
      case NodeType.EXPRESSION:
        return this.emitExpression(node);
      case NodeType.PROGRAM:
        return this.emitProgram(node);
      default:
        throw new Error(`Unknown node type : ${ node.type }`);
    }
  }

  emitProgram(node) {
    return `${ node.body.map((expression) => this.emit(expression) + ';\n') }`;
  }

  emitExpression(node) {
    return `${ node.name }(${ node.params.map((paramNode) => this.emit(paramNode)).join(', ') })`;
  }

  emitNumber(node) {
    return node.value;
  }

  emitString(node) {
    return `"${ node.value }"`;
  }
}
