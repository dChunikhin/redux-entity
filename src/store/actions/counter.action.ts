const ADD = 'ADD';
const REMOVE = 'REMOVE';

export function add() {
    return {
        type: ADD
    }
}
export function remove() {
    return {
        type: REMOVE
    }
}
