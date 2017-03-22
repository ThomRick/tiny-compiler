import PatternEnum from '../../../utils/pattern.enum';
import TokenFactory from '../../../utils/token.factory';

export default class WhiteSpaceTokenizer {
  constructor() {}

  tokenize(input, current) {
    return PatternEnum.WHITE_SPACE
      .test(input[current]) ? TokenFactory.whiteSpace() : TokenFactory.nullToken();
  }
}