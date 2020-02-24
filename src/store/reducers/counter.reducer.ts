const initialState: any = { count: 0 };

export default function (state: any = initialState, action: any) {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: state.count + 1 };
        case 'REMOVE':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}
