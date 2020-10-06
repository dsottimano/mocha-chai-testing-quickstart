'use strict';

const chai = require('chai')
    , expect = chai.expect
    , should = chai.should();


function iseven(num) {
    return num % 2 === 0;
}

function getTime(ms) {
    return new Promise(resolve => {
        setTimeout(function () {

            resolve("helloo")

        }, 3000);
    })
}


//async function, promise returned after 3 seconds
describe("async test", function () {

    //must pass in done, also, catch done to report error
    //no es6!
    //adjust timeout to 10 seconds or mocha will complain after 2s
    it('async timer event done', function (done) {
        this.timeout(10000)
        getTime().then(function(data) {
            data.should.equal("hello")
            done();


        }).catch(done)
    })

})


describe('number tests', () => {




    describe('iseven', () => {
        var num;

        beforeEach(() => {
            num = 2
        })

        afterEach(() => {
            //console.log("done")
        })



        it('should return true when number is even', () => {
            iseven(num).should.be.true
        })




        //skipping tests
        //we can skip a test by using .skip
        it.skip('skip test example 1', () => {
            iseven(num).should.be.true
        })

    })

    //we can also skip describing by adding skip
    describe.skip('skip describe', () => {

    })

})


