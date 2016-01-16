/// <reference path="../typings/tsd.d.ts" />
// import assert from 'assert';
import * as chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;
xdescribe('(Framework) Karma Plugins', () => {
    it('Should expose "expect" globally.', () => {
        assert.ok(expect);
    });
    it('Should expose "should" globally.', () => {
        assert.ok(should);
    });
    it('Should have chai-as-promised helpers.', () => {
        const pass = new Promise((res) => res('test'));
        // const fail = new Promise((res: any, rej: any) => rej());
        return Promise.all([
            expect(pass).to.be.fulfilled
        ]);
    });
});
