import {TokenType} from '../enums/token-type.enum';
import {AbstractToken} from '../models/abstract.token';
import {ITokenizer} from '../tokenizer.interface';
import {CloseParenthesisTokenizer} from './close-parenthesis.tokenizer';
import {NameTokenizer} from './name.tokenizer';
import {NumberTokenizer} from './number.tokenizer';
import {OpenParenthesisTokenizer} from './open-parenthesis.tokenizer';
import {StringTokenizer} from './string.tokenizer';
import {WhiteSpaceTokenizer} from './white-space.tokenizer';

export class TokenizerImpl implements ITokenizer {
  constructor(private tokenizers = [
    new OpenParenthesisTokenizer(),
    new WhiteSpaceTokenizer(),
    new NumberTokenizer(),
    new NameTokenizer(),
    new StringTokenizer(),
    new CloseParenthesisTokenizer(),
  ]) {}

  public tokenize(input: string): AbstractToken[] {
    let tokens: AbstractToken[] = [];
    while (input.length !== 0) {
      const { iterationTokens, afterIterationInput } = this.tokenizeIteration(input);
      tokens = tokens.concat(iterationTokens);
      input = afterIterationInput;
    }
    return tokens;
  }

  private tokenizeIteration(afterIterationInput: string): { iterationTokens: AbstractToken[], afterIterationInput: string } {
    const iterationTokens: AbstractToken[] = [];
    this.tokenizers.forEach((tokenizer) => {
      const token: AbstractToken = tokenizer.tokenize(afterIterationInput);
      if (token.length() !== 0) {
        this.addToken(token, iterationTokens);
        afterIterationInput = this.updateInput(afterIterationInput, token);
      }
    });
    return {
      iterationTokens,
      afterIterationInput,
    };
  }

  private addToken(token: AbstractToken, iterationTokens: AbstractToken[]) {
    if (token.getType() !== TokenType.WHITE_SPACE) {
      iterationTokens.push(token);
    }
  }

  private updateInput(afterIterationInput: string, token: AbstractToken) {
    if (token.getType() === TokenType.STRING) {
      return afterIterationInput.slice(token.length() + 2, afterIterationInput.length);
    } else {
      return afterIterationInput.slice(token.length(), afterIterationInput.length);
    }
  }
}
