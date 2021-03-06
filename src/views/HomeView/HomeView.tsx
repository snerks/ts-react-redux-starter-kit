/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions as counterActions } from '../../redux/modules/counter';

// import classes from './HomeView.scss';
let classes = require('./HomeView.scss');

export interface HomeViewProps extends React.Props<any> {
    counter: number;
    doubleAsync: () => void;
    increment: (value: number) => void;
}

export interface HomeViewState {
    counter: number;
}

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export const mapStateToProps = (state: HomeViewState): HomeViewProps => (
    { counter: state.counter } as HomeViewProps
);

export class HomeView extends React.Component<HomeViewProps, {}> {
   // static propTypes: any = {
   // counter: React.PropTypes.number.isRequired,
   // doubleAsync: React.PropTypes.func.isRequired,
   // increment: React.PropTypes.func.isRequired
   // };

  // constructor(props) {
  //   super(props);
  // }

  render(): JSX.Element {
    return (
      <div className='container text-center'>
        <h1>{ 'React Redux Starter Kit - in Typescript' }</h1>
        <h2>
          Sample Counter:&nbsp;
                <span className={classes['counter--green']}>{this.props.counter}</span>
        </h2>
        <button className='btn btn-default'
                onClick={() => this.props.increment(1)}>
          Increment
        </button>
        <button className='btn btn-default'
                onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
        <hr />
        <Link to='/404'>Go to 404 Page</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, counterActions)(HomeView);
