/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

/* tslint:disable:no-unused-expression */
React;
/* tslint:enable:no-unused-expression */

export interface WidgetSfcProps extends React.Props<any> {
    value: number;
}

export const WidgetSfc = (props: WidgetSfcProps) => <div><span>{ props.value * 10 }</span></div>;
