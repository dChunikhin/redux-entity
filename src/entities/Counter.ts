import actions from '../store/actions';

export default class Counter {
    public readonly name: string = 'Counter';
    private data: any = 0;
    private dispatcher: any;
    private actions: any = actions;

    setState(state: any) {
        this.data = this.extract(state);
    }

    setDispatch(dispatch: any) {
        this.dispatcher = dispatch;
    }

    getCount() {
        return this.data.count;
    }

    increment() {
        return () => this.dispatch(this.actions.add);
    }

    decrement() {
        return () => this.dispatch(this.actions.remove);
    }

    dispatch(action: any) {
        this.dispatcher(action());
    }

    extract(props: any) {
        return props.counter;
    }

}
