import {isNullOrUndefined} from 'util';
import {TokenType} from '../../utils/token.type';

export class Token {
  constructor(private _type: TokenType = null, private _value: string = null) {}
  public length(): number {
    return isNullOrUndefined(this._value) ? 0 : this._value.length;
  }
  get type(): TokenType {
    return this._type;
  }
  get value(): string {
    return this._value;
  }
}
