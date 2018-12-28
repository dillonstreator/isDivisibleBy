const isDivisibleBy = require('../index');

describe("#isDivisibleBy", function() {

    describe("Input types", function() {

        it("Should allow regular integer inputs", function() {
            expect( isDivisibleBy(5)(10) ).toBe(true);
            expect( isDivisibleBy(5)(9) ).toBe(false);
        });

        it("Should allow multiple integer inputs", function() {
            expect( isDivisibleBy(5,10)(10,20) ).toBe(true);
            expect( isDivisibleBy(5,10)(10,19) ).toBe(false);
        });

        it("Should allow array of integer inputs", function() {
            expect( isDivisibleBy([5,10])([10,20]) ).toBe(true);
            expect( isDivisibleBy([5,10])([9,19]) ).toBe(false);
        });

        it("Should allow nested array of integer inputs", function() {
            expect( isDivisibleBy([[2,5],10])([10,[20,40]]) ).toBe(true);
            expect( isDivisibleBy([5,[10,2]])([9,[19,29]]) ).toBe(false);
        });

        it("Should return false for input types that are not integers", function() {
            expect( isDivisibleBy('a')('b') ).toBe(false);
            expect( isDivisibleBy(()=>true)(()=>false) ).toBe(false);
            expect( isDivisibleBy({'a':1})({'b':2}) ).toBe(false);
            expect( isDivisibleBy(true)(false) ).toBe(false);
            expect( isDivisibleBy()() ).toBe(false);
            expect( isDivisibleBy([])([]) ).toBe(false);
            expect( isDivisibleBy([[],[]])([[],[]]) ).toBe(false);
        });
        
    });

});

