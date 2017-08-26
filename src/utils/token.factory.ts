import {TokenType} from './token.type';

export class TokenFactory {
  static nullToken() {
    return [ 0, null ];
  }

  static whiteSpace() {
    return [ 1, null ];
  }

  static openedParenthesis() {
    return [ 1, { type: TokenType.PARENTHESIS, value: '(' }];
  }

  static closedParenthesis() {
    return [ 1, { type: TokenType.PARENTHESIS, value: ')' }];
  }
}
