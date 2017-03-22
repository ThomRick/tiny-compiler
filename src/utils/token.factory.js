import TokenTypeEnum from './token.type';

export default class TokenFactory {
  static nullToken() {
    return [ 0, null ];
  }

  static whiteSpace() {
    return [ 1, null ];
  }

  static openedParenthesis () {
    return [ 1, { type: TokenTypeEnum.PARENTHESIS, value: '(' }];
  }

  static closedParenthesis() {
    return [ 1, { type: TokenTypeEnum.PARENTHESIS, value: ')' }];
  }
}