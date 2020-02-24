export function inject(injectable: any) {

    const instance = new injectable();

    const injectState = (state: any) => {
        instance.setState(state);
        return { ...state, [instance.name]: instance };
    };

    const injectDispatch = (dispatch: any) => {
        instance.setDispatch(dispatch);
        return { dispatch }
    };

    return [ injectState, injectDispatch ];
}
