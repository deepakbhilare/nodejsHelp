const chai = require('chai');
const expect = chai.expect;

describe('chai-test', function(){
    it('should test something', function(){
        expect(1).to.equal(1);
    })

    it('should test something else', function(){
        expect({name:'foo'}).to.deep.equal({name:'foo'});

    })
})