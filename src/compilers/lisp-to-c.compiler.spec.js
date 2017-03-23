import {expect} from 'chai';
import LispToCCompiler from './lisp-to-c.compiler';

describe('LispToCCompiler', () => {
  let compiler;

  beforeEach(() => {
    compiler = new LispToCCompiler();
  });

  describe('#constructor()', () => {
    it('should have a Tokenizer', () => {
      expect(compiler.tokenizer).to.exist;
    });
    it('should have a Parser', () => {
      expect(compiler.parser).to.exist;
    });
    it('should have an Emitter', () => {
      expect(compiler.emitter).to.exist;
    });
  });

  describe('#compile()', () => {
    it('should compile lisp-like syntax to c-like syntax', () => {
      const compiler = new LispToCCompiler();
      const lisp = '(add 1 2 (mult 3 4))';
      expect(compiler.compile(lisp)).to.be.equal('add(1, 2, mult(3, 4));\n');
    });
  });
});