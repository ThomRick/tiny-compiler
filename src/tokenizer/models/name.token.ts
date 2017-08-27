import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';

export class NameToken extends AbstractToken {
  private type = TokenType.NAME;

  public getType(): TokenType {
    return this.type;
  }
}
