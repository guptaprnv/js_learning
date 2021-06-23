let state = {
    add: 0
};
function render(){
    console.log(1);
}
function effects(state,action) {
    if(action == 'addTen') {
        return {...state, add: state.add + 10}
    }
    return state;
}
function shouldUpdate(s) {
    if(s === state){
        return false
    }
    return true
}
state = effects(state, 'addTen')
if(shouldUpdate(state)) {
    render();
}