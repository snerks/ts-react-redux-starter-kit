/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import { bindActionCreators } from 'redux';
import { HomeView, mapStateToProps } from '../../src/views/HomeView/HomeView';
import * as chai from 'chai';
const expect = chai.expect;
function shallowRender(component) {
    'use strict';
    const renderer = TestUtils.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}
function renderWithProps(props) {
    'use strict';
    return TestUtils.renderIntoDocument(React.createElement(HomeView, React.__spread({}, props)));
}
function shallowRenderWithProps(props) {
    'use strict';
    return shallowRender(React.createElement(HomeView, React.__spread({}, props)));
}
describe('(View) Home', () => {
    let _component;
    let _rendered;
    let _props;
    let _spies;
    beforeEach(() => {
        _spies = {
            dispatch: sinon.spy(),
            doubleAsync: sinon.spy(),
            increment: sinon.spy()
        };
        const actionCreators = {
            counter: 0,
            doubleAsync: _spies.doubleAsync,
            increment: _spies.increment
        };
        const boundActionCreators = bindActionCreators(actionCreators, _spies.dispatch);
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
    it('Should render as a <div>.', () => {
        expect(_component.type).to.equal('div');
    });
    it('Should include an <h1> with welcome text.', () => {
        const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1');
        expect(h1).to.exist;
        expect(h1.textContent).to.match(/React Redux Starter Kit - in Typescript/);
    });
    it('Should render with an <h2> that includes Sample Counter text.', () => {
        const h2 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h2');
        expect(h2).to.exist;
        expect(h2.textContent).to.match(/Sample Counter/);
    });
    it('Should render props.counter at the end of the sample counter <h2>.', () => {
        _props.counter = 5;
        const h2 = TestUtils.findRenderedDOMComponentWithTag(renderWithProps(_props), 'h2');
        expect(h2).to.exist;
        expect(h2.textContent).to.match(/5$/);
    });
    describe('An increment button...', () => {
        let _btn;
        beforeEach(() => {
            _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
                .filter((a) => /Increment/.test(a.textContent))[0];
        });
        it('should be rendered.', () => {
            expect(_btn).to.exist;
        });
        it('should dispatch an action when clicked.', () => {
            /* tslint:disable:no-unused-expression */
            _spies.dispatch.should.have.not.been.called;
            /* tslint:enable:no-unused-expression */
            TestUtils.Simulate.click(_btn);
            /* tslint:disable:no-unused-expression */
            _spies.dispatch.should.have.been.called;
            /* tslint:enable:no-unused-expression */
        });
    });
    describe('A Double (Async) button...', () => {
        let _btn;
        beforeEach(() => {
            _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
                .filter((a) => /Double/.test(a.textContent))[0];
        });
        it('should be rendered.', () => {
            expect(_btn).to.exist;
        });
        it('should dispatch an action when clicked.', () => {
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
describe('(View) Home.mapStateToProps', () => {
    it('maps counter correctly', () => {
        const result = mapStateToProps({ counter: 1 });
        expect(result.counter).to.equal(1);
    });
});
