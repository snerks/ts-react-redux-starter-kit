/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../src/layouts/corelayout/corelayout.tsx" />
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var CoreLayout_1 = require('../../src/layouts/CoreLayout/CoreLayout');
var chai = require('chai');
var expect = chai.expect;
function shallowRender(component) {
    'use strict';
    var renderer = TestUtils.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}
function shallowRenderWithProps(props) {
    'use strict';
    return shallowRender(React.createElement(CoreLayout_1.CoreLayout, React.__spread({}, props)));
}
describe('(Layout) Core', function () {
    var _component;
    var _props;
    var _child;
    beforeEach(function () {
        _child = React.createElement("h1", {"className": 'child'}, "Child");
        _props = {
            children: _child
        };
        _component = shallowRenderWithProps(_props);
    });
    it('Should render as a <div>.', function () {
        expect(_component.type).to.equal('div');
    });
});
