import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';

export class CloseParenthesisToken extends AbstractToken {
  private type = TokenType.PARENTHESIS;

  constructor() {
    super(')');
  }

  public getType(): TokenType {
    return this.type;
  }
}
