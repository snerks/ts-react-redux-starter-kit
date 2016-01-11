/// <reference path="../typings/tsd.d.ts" />
// import assert from 'assert';
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;
describe('(Framework) Karma Plugins', function () {
    it('Should expose "expect" globally.', function () {
        assert.ok(expect);
    });
    it('Should expose "should" globally.', function () {
        assert.ok(should);
    });
    it('Should have chai-as-promised helpers.', function () {
        var pass = new Promise(function (res) { return res('test'); });
        // const fail = new Promise((res: any, rej: any) => rej());
        return Promise.all([
            expect(pass).to.be.fulfilled,
        ]);
    });
});
