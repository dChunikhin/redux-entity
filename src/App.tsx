import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Counter from './entities/Counter';
import Panel from './components/panel/panel.components';
import { inject } from './redux-entity';

function App({ Counter, ...props }: any) {
    return (
        <>
            <p>Count: {Counter.getCount()}</p>
            <button onClick={Counter.increment()}>Add</button>
            <button onClick={Counter.decrement()}>Remove</button>
            <p>Props: {Object.keys(props).join(`, `)}</p>
            <p>Children:</p>
            <Panel someProps={'panel'} Counter={Counter}></Panel>
        </>
    );
}

const [ injectState, injectDispatch ] = inject(Counter);
export default connect(injectState, injectDispatch)(App);




// const mapStateToProps = (state: any) => ({ counter: state.counter.object });
// const mapDispatchToProps = (dispatch: any) => ({ dispatcher: dispatch });

