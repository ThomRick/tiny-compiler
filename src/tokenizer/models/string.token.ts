import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';

export class StringToken extends AbstractToken {
  private type = TokenType.STRING;

  public getType(): TokenType {
    return this.type;
  }
}
