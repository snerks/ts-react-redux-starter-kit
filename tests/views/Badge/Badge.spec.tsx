﻿/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';

// import { bindActionCreators } from 'redux';

import { Badge, BadgeProps } from '../../../src/views/Badge/Badge';

import * as chai from 'chai';
const expect = chai.expect;

import * as Sinon from 'sinon';

function shallowRender(component: React.ReactElement<any>): React.ReactElement<any> {
    'use strict';

    const renderer = TestUtils.createRenderer();

    renderer.render(component);
    return renderer.getRenderOutput();
}

function renderWithProps(props: BadgeProps): React.Component<any, any> {
    'use strict';

    return TestUtils.renderIntoDocument(<Badge {...props} />);
}

function shallowRenderWithProps(props: BadgeProps): React.ReactElement<any> {
    'use strict';

    return shallowRender(<Badge {...props} />);
}

 interface SpyContext {
    dispatch: Sinon.SinonSpy;
    doubleAsync: Sinon.SinonSpy;
    increment: Sinon.SinonSpy;
 }

describe('(View) Badge', () => {
    let _component: React.ReactElement<any>;
    let _rendered: React.Component<any, any>;
    let _props: BadgeProps;
    let _spies: SpyContext;

    beforeEach(() => {
         _spies = {
             dispatch: sinon.spy()
             , doubleAsync: sinon.spy()
             , increment: sinon.spy()
         };

         // const actionCreators: BadgeProps = {
         //   counter: 0,
         //   doubleAsync: _spies.doubleAsync,
         //   increment: _spies.increment
         // };

        // const boundActionCreators = bindActionCreators(actionCreators, _spies.dispatch);

        _props = {
            counter: 0,
            doubleAsync: _spies.doubleAsync
            ,
            // increment: boundActionCreators.increment
            increment: _spies.increment
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

     it('Should include an <h1>', () => {
        const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1');

        expect(h1).to.exist;
     });

     it('Should include an <h1> with welcome text.', () => {
         const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1');

         expect(h1.textContent).to.match(/^React Redux Starter Kit - in Typescript$/);
     });

     it('Should render with an <h2> that includes Sample Counter text.', () => {
        const h2 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h2');

        expect(h2).to.exist;
        expect(h2.textContent).to.match(/Sample Counter/);
     });

     it('Should render props.counter at the end of the sample counter <h2>.', () => {
        _props.counter = 5;

        const h2 = TestUtils.findRenderedDOMComponentWithTag(
            renderWithProps(_props), 'h2'
        );

        expect(h2).to.exist;
        expect(h2.textContent).to.match(/5$/);
     });

     describe('An increment button...', () => {
        let _btn;

        beforeEach(() => {
            _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
                .filter((a: Element) => /Increment/.test(a.textContent))[0];
        });

        it('should be rendered.', () => {
            expect(_btn).to.exist;
        });

        it('should dispatch an action when clicked.', () => {
            /* tslint:disable:no-unused-expression */
            // _spies.dispatch.should.have.not.been.called;
            _spies.increment.should.have.not.been.called;
            /* tslint:enable:no-unused-expression */

            TestUtils.Simulate.click(_btn);

            /* tslint:disable:no-unused-expression */
            // _spies.dispatch.should.have.been.called;
            _spies.increment.should.have.been.called;
            /* tslint:enable:no-unused-expression */
        });
     });

     describe('A Double (Async) button...', () => {
        let _btn;

        beforeEach(() => {
            _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
                .filter((a: Element) => /Double/.test(a.textContent))[0];
        });

        it('should be rendered.', () => {
            expect(_btn).to.exist;
        });

        it('should dispatch an action when clicked.', () => {
            /* tslint:disable:no-unused-expression */
            // _spies.dispatch.should.have.not.been.called;
            _spies.doubleAsync.should.have.not.been.called;
            /* tslint:enable:no-unused-expression */

            TestUtils.Simulate.click(_btn);

            /* tslint:disable:no-unused-expression */
            // _spies.dispatch.should.have.been.called;
            _spies.doubleAsync.should.have.been.called;
            /* tslint:enable:no-unused-expression */
        });
     });
});
