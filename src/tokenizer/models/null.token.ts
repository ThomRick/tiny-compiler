import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from './abstract.token';

export class NullToken extends AbstractToken {
  constructor() {
    super(null);
  }

  public getType(): TokenType {
    return null;
  }

  public length(): number {
    return 0;
  }
}
