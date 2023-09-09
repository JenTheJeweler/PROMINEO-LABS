let expect = chai.expect;

describe('MyFunctions', function() {
    describe('#doSomething', function() {
        it('should concatenate the two parameters' , function() {
            let x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });
        it('should throw an error if x is not a string', function() {
            expect(() => doSomething(1, 2)).to.throw(Error, 'x must be a string');
          });
        
        });
    });
