import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';

export class WhiteSpaceToken extends AbstractToken {
  private type = TokenType.WHITE_SPACE;

  constructor() {
    super(' ');
  }

  public getType(): TokenType {
    return this.type;
  }
}
