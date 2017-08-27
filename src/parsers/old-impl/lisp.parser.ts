import {NodeType} from '../../utils/node.type';
import {TokenType} from '../../utils/token.type';

export class LispParser {
  constructor() {}

  parse(tokens) {
    const node = {
      type: NodeType.PROGRAM,
      body: [],
    };
    let currentTokenIndex = 0;
    while (currentTokenIndex < tokens.length) {
      const [ updatedIndex, nestedNode ] = this.parseToken(tokens, currentTokenIndex);
      currentTokenIndex = updatedIndex;
      node.body.push(nestedNode);
    }
    return node;
  }

  parseToken(tokens, currentTokenIndex) {
    const token = tokens[currentTokenIndex];
    if (token.type === TokenType.NUMBER) {
      return this.parseNumber(tokens, currentTokenIndex);
    } else if (token.type === TokenType.STRING) {
      return this.parseString(tokens, currentTokenIndex);
    } else if (token.type === TokenType.PARENTHESIS && token.value === '(') {
      return this.parseExpression(tokens, currentTokenIndex);
    } else {
      throw new Error(`Unknown token type : ${ token.type }`);
    }
  }

  parseNumber(tokens, currentTokenIndex) {
    return [ currentTokenIndex + 1, { type: NodeType.NUMBER, value: tokens[currentTokenIndex].value } ];
  }

  parseString(tokens, currentTokenIndex) {
    return [ currentTokenIndex + 1, { type: NodeType.STRING, value: tokens[currentTokenIndex].value } ];
  }

  parseExpression(tokens, currentTokenIndex) {
    let token = tokens[++currentTokenIndex];
    const node = {
      type: NodeType.EXPRESSION,
      name: token.value,
      params: [],
    };
    token = tokens[++currentTokenIndex];
    while (!(token.type === TokenType.PARENTHESIS && token.value === ')')) {
      const [ updatedTokenIndex, nestedNode ] = this.parseToken(tokens, currentTokenIndex);
      currentTokenIndex = updatedTokenIndex;
      node.params.push(nestedNode);
      token = tokens[currentTokenIndex];
    }
    currentTokenIndex++;
    return [ currentTokenIndex, node ];
  }
}
