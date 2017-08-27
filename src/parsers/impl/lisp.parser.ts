import {TokenType} from '../../tokenizer/enums/token-type.enum';
import {Token} from '../../tokenizer/models/token.model';
import {AbstractNode} from '../models/abstract.node';
import {ExpressionNode} from '../models/expression.node';
import {NumberNode} from '../models/number.node';
import {ProgramNode} from '../models/program.node';
import {StringNode} from '../models/string.node';
import {IParser} from '../parser.interface';

export class LispParser implements IParser {
  constructor() {}

  public parse(tokens: Token[]): AbstractNode {
    const program = new ProgramNode();
    return this.parseTokensIn(program, tokens);
  }

  private parseTokensIn(node: AbstractNode, tokens: Token[]): AbstractNode {
    while (tokens.length !== 0) {
      const token: Token = tokens.shift();
      switch (token.type) {
        case TokenType.NUMBER:
          node.addNode(new NumberNode(token.value));
          break;
        case TokenType.STRING:
          node.addNode(new StringNode(token.value));
          break;
        case TokenType.PARENTHESIS:
          if (token.value === '(') {
            const subName = tokens.shift().value;
            node.addNode(this.parseExpression(subName, tokens));
          }
          break;
      }
    }
    return node;
  }

  private parseExpression(name: string, tokens: Token[]): ExpressionNode {
    const expression = new ExpressionNode(name);
    return this.parseTokensIn(expression, tokens) as ExpressionNode;
  }
}
