import {expect} from 'chai';
import LispParser from './lisp.parser';
import TokenType from '../utils/token.type';
import NodeType from '../utils/node.type';

describe('LispParser', () => {
  let parser;

  beforeEach(() => {
    parser = new LispParser();
  });

  describe('#parse()', () => {
    it('should return a Program node', () => {
      const tokens =  [
        { type: TokenType.PARENTHESIS, value: '('        },
        { type: TokenType.NAME,        value: 'print'    },
        { type: TokenType.STRING,      value: 'Hello'    },
        { type: TokenType.NUMBER,      value: '2'        },
        { type: TokenType.PARENTHESIS, value: ')'        },
        { type: TokenType.PARENTHESIS, value: '('        },
        { type: TokenType.NAME,        value: 'add'      },
        { type: TokenType.NUMBER,      value: '2'        },
        { type: TokenType.PARENTHESIS, value: '('        },
        { type: TokenType.NAME,        value: 'subtract' },
        { type: TokenType.NUMBER,      value: '4'        },
        { type: TokenType.NUMBER,      value: '2'        },
        { type: TokenType.PARENTHESIS, value: ')'        },
        { type: TokenType.PARENTHESIS, value: ')'        },
      ];
      expect(parser.parse(tokens)).to.be.deep.equal(
        { type: NodeType.PROGRAM, body: [
          { type: NodeType.EXPRESSION, name: 'print', params: [
            { type: NodeType.STRING, value: 'Hello'},
            { type: NodeType.NUMBER, value: '2' }
          ]},
          { type: NodeType.EXPRESSION, name: 'add', params: [
            { type: NodeType.NUMBER, value: '2' },
            { type: NodeType.EXPRESSION, name: 'subtract', params: [
              { type: NodeType.NUMBER, value: '4' },
              { type: NodeType.NUMBER, value: '2'}
            ]}
          ]}]
        }
      )
    });
  });

  describe('#parseNumber()', () => {
    it('should increase current and return and a NumberLiteral ObjectTree', () => {
      const tokens = [
        { type: TokenType.NUMBER, value: '42' }
      ];
      const current = 0;
      expect(parser.parseNumber(tokens, current)).to.be.deep.equal(
        [ current + 1, { type: NodeType.NUMBER, value: '42' }]
      );
    });
  });

  describe('#parseString()', () => {
    it('should increment current and return a StringLiteral ObjectTree', () => {
      const tokens = [
        { type: TokenType.STRING, value: 'Hello World'}
      ];
      const current = 0;
      expect(parser.parseString(tokens, current)).to.be.deep.equal(
        [ current + 1, { type: NodeType.STRING, value: 'Hello World' }]
      );
    });
  });

  describe('#parseToken()', () => {
    context('token at current is a number', () => {
      it('should use number parser to return an ObjectTree', () => {
        const tokens = [
          { type: TokenType.NUMBER, value: '42' }
        ];
        const current = 0;
        expect(parser.parseToken(tokens, current)).to.be.deep.equal([
          current + 1, { type: NodeType.NUMBER, value: '42' }
        ]);
      });
    });
    context('token at current is a string', () => {
      it('should use string parser to return an ObjectTree', () => {
        const tokens = [
          { type: TokenType.STRING, value: 'Hello World' }
        ];
        const current = 0;
        expect(parser.parseToken(tokens, current)).to.be.deep.equal([
          current + 1, { type: NodeType.STRING, value: 'Hello World' }
        ]);
      });
    });
    context('token at current is an expression', () => {
      it('should use expression parser to return an ObjectTree', () => {
        const tokens = [
          { type: TokenType.PARENTHESIS, value: '('        },
          { type: TokenType.NAME,        value: 'subtract' },
          { type: TokenType.NUMBER,      value: '4'        },
          { type: TokenType.NUMBER,      value: '2'        },
          { type: TokenType.PARENTHESIS, value: ')'        },
        ];
        const current = 0;
        expect(parser.parseToken(tokens, current)).to.be.deep.equal([
          5,
          {
            type: NodeType.EXPRESSION,
            name: 'subtract',
            params: [
              { type: NodeType.NUMBER, value: '4'},
              { type: NodeType.NUMBER, value: '2'}
            ]
          }
        ]);
      });
    });
    context('token at current is unknown', () => {
      it('should throw an Error', () => {
        const tokens = [
          { type: 'unknown', value: 'unknown' }
        ];
        const current = 0;
        let err;
        try {
          parser.parseToken(tokens, current);
        } catch (error) {
          err = error;
        }
        expect(err).to.exist;
        expect(err.message).to.be.equal(`Unknown token type : ${tokens[0].type}`);
      });
    });
  });

  describe('#parseExpression()', () => {
    context('only one expression to parse', () => {
      it('should return the expected CallExpression NodeTree', () => {
        const tokens = [
          { type: TokenType.PARENTHESIS, value: '('        },
          { type: TokenType.NAME,        value: 'subtract' },
          { type: TokenType.NUMBER,      value: '4'        },
          { type: TokenType.NUMBER,      value: '2'        },
          { type: TokenType.PARENTHESIS, value: ')'        }
        ];
        const current = 0;
        expect(parser.parseExpression(tokens, current)).to.be.deep.equal([
          current + 5,
          { type: NodeType.EXPRESSION, name: 'subtract', params: [
            { type: NodeType.NUMBER, value: '4'},
            { type: NodeType.NUMBER, value: '2'}
          ]}
        ]);
      });
    });
    context('expression contains a nested expression', () => {
      it('should return the expected CallExpression NodeTree', () => {
        it('should return the expected CallExpression NodeTree', () => {
          const tokens = [
            { type: TokenType.PARENTHESIS, value: '('        },
            { type: TokenType.NAME,        value: 'add'      },
            { type: TokenType.NUMBER,      value: '2'        },
            { type: TokenType.NAME,        value: 'subtract' },
            { type: TokenType.NUMBER,      value: '4'        },
            { type: TokenType.NUMBER,      value: '2'        },
            { type: TokenType.PARENTHESIS, value: ')'        },
            { type: TokenType.PARENTHESIS, value: ')'        }
          ];
          const current = 0;
          expect(parser.parseExpression(tokens, current)).to.be.deep.equal([
            current + 5,
            { type: NodeType.EXPRESSION, name: 'add', params: [
              { type: NodeType.NUMBER, value: '2'},
              { type: NodeType.EXPRESSION, name: 'subtract', params: [
                { type: NodeType.NUMBER, value: '4'},
                { type: NodeType.NUMBER, value: '2'}
              ]}
            ]}
          ]);
        });
      });
    });
  });
});