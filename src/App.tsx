import React from 'react';
import './App.css';
import {connect} from "react-redux";
import actions from './store/actions';

const { add, remove } = actions;


class Counter {
    private readonly count: any = 0;
    private readonly dispatcher: any;

    constructor(props: any) {
        this.count = props.counter.counter;
        this.dispatcher = props.dispatcher;
    }

    getCount() {
        return this.count;
    }

    add() {
        this.dispatch(add);
    }

    remove() {
        this.dispatch(remove);
    }

    dispatch(action: any) {
        this.dispatcher(action());
    }
}


function App(props: any) {
    const counter = new Counter(props);
    return (
        <>
            <p>Count: {counter.getCount()}</p>
            <button onClick={counter.add.bind(counter)}>Add</button>
            <button onClick={counter.remove.bind(counter)}>Remove</button>
        </>
  );
}

const mapStateToProps = (state: any) => ({ counter: state.counter.object });
const mapDispatchToProps = (dispatch: any) => ({ dispatcher: dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(App);
