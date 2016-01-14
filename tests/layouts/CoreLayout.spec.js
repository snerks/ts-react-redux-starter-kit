/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../src/layouts/corelayout/corelayout.tsx" />
import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import { CoreLayout } from '../../src/layouts/CoreLayout/CoreLayout';
import * as chai from 'chai';
const expect = chai.expect;
function shallowRender(component) {
    'use strict';
    const renderer = TestUtils.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}
function shallowRenderWithProps(props) {
    'use strict';
    return shallowRender(React.createElement(CoreLayout, React.__spread({}, props)));
}
xdescribe('(Layout) Core', () => {
    let _component;
    let _props;
    let _child;
    beforeEach(() => {
        _child = React.createElement("h1", {"className": 'child'}, "Child");
        _props = {
            children: _child
        };
        _component = shallowRenderWithProps(_props);
    });
    it('Should render as a <div>.', () => {
        expect(_component.type).to.equal('div');
    });
});
