const counter: any = {
    object: { counter: 0 }
};

export default function (state: any = counter, action: any) {
    switch (action.type) {
        case 'ADD':
            return { ...state, object: { counter: state.object.counter + 1 } };
        case 'REMOVE':
            return { ...state, object: { counter: state.object.counter - 1 } };
        default:
            return state;
    }
}
