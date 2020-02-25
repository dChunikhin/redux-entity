import actions from '../store/actions';

export default class Counter {
    public readonly name: string = 'Counter';
    // private data: any = 0;
    // private dispatcher: any;
    private actions: any = actions;

    public state: any = { count: 0 };
    public dispatch: any = null;


    // setState(state: any) {
    //     this.data = this.extract(state);
    // }
    //
    // setDispatch(dispatch: any) {
    //     this.dispatcher = dispatch;
    // }

    getCount() {
        return this.state.count;
    }

    increment() {
        return () => this.dispatchAction(this.actions.add);
    }

    decrement() {
        return () => this.dispatchAction(this.actions.remove);
    }

    dispatchAction(action: any) {
        this.dispatch(action());
        // this.dispatcher(action());
    }

    select(state: any) {
        return state.counter;
    }

}
