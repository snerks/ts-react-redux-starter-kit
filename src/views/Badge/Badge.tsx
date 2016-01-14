/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

export interface BadgeProps extends React.Props<any> {
    value: number;
}

export class Badge extends React.Component<BadgeProps, {}> {
    render(): JSX.Element {
        return (
            <span className='container text-center'></span>
        );
    }
}

export default Badge;