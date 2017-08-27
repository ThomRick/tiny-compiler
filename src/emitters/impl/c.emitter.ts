import {NodeType} from '../../parsers/enums/node-type.enum';
import {AbstractNode} from '../../parsers/models/abstract.node';
import {ExpressionNode} from '../../parsers/models/expression.node';
import {NumberNode} from '../../parsers/models/number.node';
import {ProgramNode} from '../../parsers/models/program.node';
import {StringNode} from '../../parsers/models/string.node';
import {IEmitter} from '../emitter.interface';

export class CEmitter implements IEmitter {
  constructor() {}

  public emit(node: AbstractNode) {
    switch (node.getType()) {
      case NodeType.NUMBER:
        return this.emitNumber(node as NumberNode);
      case NodeType.STRING:
        return this.emitString(node as StringNode);
      case NodeType.EXPRESSION:
        return this.emitExpression(node as ExpressionNode);
      case NodeType.PROGRAM:
        return this.emitProgram(node as ProgramNode);
      default:
        throw new Error(`Unknown node type : ${ node.getType() }`);
    }
  }

  private emitProgram(program: ProgramNode) {
    return `${ program.getNodes().map((node) => this.emit(node) + ';\n') }`;
  }

  private emitExpression(expression: ExpressionNode) {
    return `${ expression.getName() }(${ expression.getNodes().map((node) => this.emit(node)).join(', ') })`;
  }

  private emitNumber(node: NumberNode) {
    return node.getValue();
  }

  private emitString(node: StringNode) {
    return `"${ node.getValue() }"`;
  }
}
