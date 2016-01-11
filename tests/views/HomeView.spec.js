/// <reference path="../../typings/tsd.d.ts" />
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var redux_1 = require('redux');
var HomeView_1 = require('../../src/views/HomeView/HomeView');
var chai = require('chai');
var expect = chai.expect;
function shallowRender(component) {
    'use strict';
    var renderer = TestUtils.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}
function renderWithProps(props) {
    'use strict';
    return TestUtils.renderIntoDocument(React.createElement(HomeView_1.HomeView, React.__spread({}, props)));
}
function shallowRenderWithProps(props) {
    'use strict';
    return shallowRender(React.createElement(HomeView_1.HomeView, React.__spread({}, props)));
}
describe('(View) Home', function () {
    var _component;
    var _rendered;
    var _props;
    var _spies;
    beforeEach(function () {
        _spies = {
            dispatch: sinon.spy(),
            doubleAsync: sinon.spy(),
            increment: sinon.spy()
        };
        var actionCreators = {
            counter: 0,
            doubleAsync: _spies.doubleAsync,
            increment: _spies.increment
        };
        var boundActionCreators = redux_1.bindActionCreators(actionCreators, _spies.dispatch);
        _props = {
            counter: 0,
            doubleAsync: boundActionCreators.doubleAsync,
            increment: boundActionCreators.increment
        };
        // _props = {
        //  counter: 0,
        //  ...bindActionCreators({
        //    doubleAsync: (_spies.doubleAsync = sinon.spy()),
        //    increment: (_spies.increment = sinon.spy())
        //  }, _spies.dispatch = sinon.spy())
        // };
        _component = shallowRenderWithProps(_props);
        _rendered = renderWithProps(_props);
    });
    it('Should render as a <div>.', function () {
        expect(_component.type).to.equal('div');
    });
    it('Should include an <h1> with welcome text.', function () {
        var h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1');
        expect(h1).to.exist;
        expect(h1.textContent).to.match(/React Redux Starter Kit - in Typescript/);
    });
    it('Should render with an <h2> that includes Sample Counter text.', function () {
        var h2 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h2');
        expect(h2).to.exist;
        expect(h2.textContent).to.match(/Sample Counter/);
    });
    it('Should render props.counter at the end of the sample counter <h2>.', function () {
        _props.counter = 5;
        var h2 = TestUtils.findRenderedDOMComponentWithTag(renderWithProps(_props), 'h2');
        expect(h2).to.exist;
        expect(h2.textContent).to.match(/5$/);
    });
    describe('An increment button...', function () {
        var _btn;
        beforeEach(function () {
            _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
                .filter(function (a) { return /Increment/.test(a.textContent); })[0];
        });
        it('should be rendered.', function () {
            expect(_btn).to.exist;
        });
        it('should dispatch an action when clicked.', function () {
            /* tslint:disable:no-unused-expression */
            _spies.dispatch.should.have.not.been.called;
            /* tslint:enable:no-unused-expression */
            TestUtils.Simulate.click(_btn);
            /* tslint:disable:no-unused-expression */
            _spies.dispatch.should.have.been.called;
            /* tslint:enable:no-unused-expression */
        });
    });
    describe('A Double (Async) button...', function () {
        var _btn;
        beforeEach(function () {
            _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
                .filter(function (a) { return /Double/.test(a.textContent); })[0];
        });
        it('should be rendered.', function () {
            expect(_btn).to.exist;
        });
        it('should dispatch an action when clicked.', function () {
            /* tslint:disable:no-unused-expression */
            _spies.dispatch.should.have.not.been.called;
            /* tslint:enable:no-unused-expression */
            TestUtils.Simulate.click(_btn);
            /* tslint:disable:no-unused-expression */
            _spies.dispatch.should.have.been.called;
            /* tslint:enable:no-unused-expression */
        });
    });
});
