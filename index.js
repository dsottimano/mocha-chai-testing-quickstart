'use strict';

const chai = require('chai')
  , expect = chai.expect
  , should = chai.should();


function iseven(num) {
    return num % 2 === 0;
}

describe('iseven',()=>{
    var num;

    beforeEach(()=>{
        num= 1
    })

    afterEach(()=>{
       num = 1
    })


    
    it('should return true when number is even',() =>{
        iseven(num).should.be.true
    }) 
})