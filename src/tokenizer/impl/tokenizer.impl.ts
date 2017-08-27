import {TokenType} from '../enums/token-type.enum';
import {Token} from '../models/token.model';
import {ITokenizer} from '../tokenizer.interface';
import {CloseParenthesisTokenizer} from './close-parenthesis.tokenizer';
import {NameTokenizer} from './name.tokenizer';
import {NumberTokenizer} from './number.tokenizer';
import {OpenParenthesisTokenizer} from './open-parenthesis.tokenizer';
import {WhiteSpaceTokenizer} from './white-space.tokenizer';
import {StringTokenizer} from './string.tokenizer';

export class TokenizerImpl implements ITokenizer {
  constructor(private tokenizers = [
    new OpenParenthesisTokenizer(),
    new WhiteSpaceTokenizer(),
    new NumberTokenizer(),
    new NameTokenizer(),
    new StringTokenizer(),
    new CloseParenthesisTokenizer(),
  ]) {}

  public tokenize(input: string): Token[] {
    let tokens: Token[] = [];
    while (input.length !== 0) {
      const { iterationTokens, afterIterationInput } = this.tokenizeIteration(input);
      tokens = tokens.concat(iterationTokens);
      input = afterIterationInput;
    }
    return tokens;
  }

  private tokenizeIteration(afterIterationInput: string): { iterationTokens: Token[], afterIterationInput: string } {
    const iterationTokens: Token[] = [];
    this.tokenizers.forEach((tokenizer) => {
      const token: Token = tokenizer.tokenize(afterIterationInput);
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

  private addToken(token: Token, iterationTokens: Token[]) {
    if (token.type !== TokenType.WHITE_SPACE) {
      iterationTokens.push(token);
    }
  }

  private updateInput(afterIterationInput: string, token: Token) {
    if (token.type === TokenType.STRING) {
      return afterIterationInput.slice(token.length() + 2, afterIterationInput.length);
    } else {
      return afterIterationInput.slice(token.length(), afterIterationInput.length);
    }
  }
}
