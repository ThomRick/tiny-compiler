import {TokenType} from '../../tokenizer/enums/token-type.enum';
import {AbstractToken} from '../../tokenizer/models/abstract.token';
import {AbstractNode} from '../models/abstract.node';
import {ExpressionNode} from '../models/expression.node';
import {NumberNode} from '../models/number.node';
import {ProgramNode} from '../models/program.node';
import {StringNode} from '../models/string.node';
import {IParser} from '../parser.interface';

export class LispParser implements IParser {
  constructor() {}

  public parse(tokens: AbstractToken[]): AbstractNode {
    const program = new ProgramNode();
    return this.parseTokensIn(program, tokens);
  }

  private parseTokensIn(node: AbstractNode, tokens: AbstractToken[]): AbstractNode {
    while (tokens.length !== 0) {
      const token: AbstractToken = tokens.shift();
      switch (token.getType()) {
        case TokenType.NUMBER:
          node.addNode(new NumberNode(token.getValue()));
          break;
        case TokenType.STRING:
          node.addNode(new StringNode(token.getValue()));
          break;
        case TokenType.PARENTHESIS:
          if (token.getValue() === '(') {
            const subName = tokens.shift().getValue();
            node.addNode(this.parseExpression(subName, tokens));
          }
          break;
      }
    }
    return node;
  }

  private parseExpression(name: string, tokens: AbstractToken[]): ExpressionNode {
    const expression = new ExpressionNode(name);
    return this.parseTokensIn(expression, tokens) as ExpressionNode;
  }
}
