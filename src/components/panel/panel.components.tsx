import React from 'react';
import {inject} from "../../redux-entity";
import Counter from "../../entities/Counter";
import {connect} from "react-redux";

function Panel({ Counter: Counter, ...props }: { Counter: Counter, someProps: any }): any {
    return <>
        <h1>Count: { Counter.getCount() }</h1>
        <button onClick={Counter.increment()}>ADD</button>
        <p>Props: {Object.keys(props).join(', ')}</p>
    </>
}

// const [ injectState, injectDispatch ] = inject(Counter);
// export default connect(injectState, injectDispatch)(Panel);
