import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';

export class NumberToken extends AbstractToken {
  private type = TokenType.NUMBER;
  public getType(): TokenType {
    return this.type;
  }
}
