import * as React from 'react';
import '../../styles/core.scss';
export class CoreLayout extends React.Component {
    render() {
        return (React.createElement("div", {"className": 'page-container'}, React.createElement("div", {"className": 'view-container'}, this.props.children)));
    }
}
CoreLayout.propTypes = {
    children: React.PropTypes.element
};
export default CoreLayout;
