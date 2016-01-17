///// <reference path="../../../typings/tsd.d.ts" />

//import * as React from 'react';
//import * as TestUtils from 'react-addons-test-utils';

//// import { bindActionCreators } from 'redux';

//import { WidgetSfc, WidgetSfcProps } from '../../../src/views/WidgetSfc/WidgetSfc';

//import * as chai from 'chai';
//const expect = chai.expect;

//import * as Sinon from 'sinon';

//function shallowRender(component: React.ReactElement<any>): React.ReactElement<any> {
//    'use strict';

//    const renderer = TestUtils.createRenderer();

//    renderer.render(component);
//    return renderer.getRenderOutput();
//}

//function renderWithProps(props: WidgetSfcProps): React.Component<any, any> {
//    'use strict';

//    return TestUtils.renderIntoDocument(<WidgetSfc {...props} />);
//}

//function shallowRenderWithProps(props: WidgetSfcProps): React.ReactElement<any> {
//    'use strict';

//    return shallowRender(<WidgetSfc {...props} />);
//}

////interface SpyContext {
////    dispatch: Sinon.SinonSpy;
////    doubleAsync: Sinon.SinonSpy;
////    increment: Sinon.SinonSpy;
////}

//describe('(View) WidgetSfc', () => {
//    let _component: React.ReactElement<any>;
//    let _rendered: React.Component<any, any>;
//    let _props: WidgetSfcProps;
//    //let _spies: SpyContext;

//    beforeEach(() => {
//        //_spies = {
//        //    dispatch: sinon.spy()
//        //    , doubleAsync: sinon.spy()
//        //    , increment: sinon.spy()
//        //};

//        // const actionCreators: BadgeProps = {
//        //   counter: 0,
//        //   doubleAsync: _spies.doubleAsync,
//        //   increment: _spies.increment
//        // };

//        // const boundActionCreators = bindActionCreators(actionCreators, _spies.dispatch);

//        _props = {
//            value: 0,
//        };

//        // _props = {
//        //  counter: 0,
//        //  ...bindActionCreators({
//        //    doubleAsync: (_spies.doubleAsync = sinon.spy()),
//        //    increment: (_spies.increment = sinon.spy())
//        //  }, _spies.dispatch = sinon.spy())
//        // };

//        _component = shallowRenderWithProps(_props);
//        _rendered = renderWithProps(_props);
//    });

//    it('Should render as a <div>.', () => {
//        expect(_component.type).to.equal('div');
//    });

//    it('Should be shallow-rendered with props', () => {
//        expect(_component).to.not.be.null;

//        const span = _component.props.children;
//        const spanContent = span.props.children;

//        //expect(span).to.equal(
//        //    <span>0</span>
//        //);

//        console.log(spanContent);

//        expect(spanContent).to.equal(0);
//    });

//    xit('Should include an <h1>', () => {
//        const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1');

//        expect(h1).to.exist;
//    });

//    xit('Should include an <h1> with welcome text.', () => {
//        const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1');

//        expect(h1.textContent).to.match(/^React Redux Starter Kit - in Typescript$/);
//    });

//    xit('Should render with text that includes "value" text.', () => {
//        const h2 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h2');

//        expect(h2).to.exist;
//        expect(h2.textContent).to.match(/Sample Value/);
//    });
    
//    it('Should render props.value at the end of the text.', () => {
//        _props.value = 5;

//        const renderedComponent = renderWithProps(_props);
//        //const span = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'span');

//        console.log(renderedComponent);

//        expect(_component.type).to.equal('div');

//        //expect(span).to.exist;
//        //expect(span.textContent).to.match(/5$/);
//    });
//});
