import {TokenType} from '../enums/token-type.enum';

export abstract class AbstractToken {
  constructor(private value: string) {}

  public abstract getType(): TokenType;

  public getValue(): string {
    return this.value;
  }

  public length(): number {
    return this.value.length;
  }
}
