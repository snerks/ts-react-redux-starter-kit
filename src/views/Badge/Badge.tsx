/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

export interface BadgeProps extends React.Props<any> {
    counter: number;
    increment: (value: number) => void;
    doubleAsync: () => void;
}

export class Badge extends React.Component<BadgeProps, {}> {
    // static propTypes: any = {
    //    counter: React.PropTypes.number.isRequired,
    //    increment: React.PropTypes.func.isRequired,
    //    doubleAsync: React.PropTypes.func.isRequired
    // };

    render(): JSX.Element {
        return (
            <div>
                <h1>React Redux Starter Kit - in Typescript</h1>
                <h2>Sample Counter 5</h2>
                <button onClick={ () => this.props.increment(1) }>Increment</button>
                <button onClick={ () => this.props.doubleAsync() }>Double</button>
            </div>
        );
    }
}

export default Badge;