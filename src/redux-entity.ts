export function inject(injectable: any) {

    const instance = new injectable();

    const interceptState = (selector: any) => {
        return (state: any) => {
            instance.state = instance.select(state);
            return { ...selector(state), [instance.name]: instance }
        };
    };

    const interceptDispatch = (dispatch: any) => {
        instance.dispatch = dispatch;
        return { dispatch }
    };



    return {
        state: interceptState,
        dispatch: interceptDispatch
    }
}

function rest() {

}
