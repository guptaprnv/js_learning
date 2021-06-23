let state = {
  warden: 600,
  animals: 800,
};
function bad(state) {
  state.prp = "yes";
  return state;
}

function good(state) {
  let newState = { ...state };
  newState.prp = "yes";
  return newState;
}

newState = bad(state);
console.log("prp:" + newState.prp);
newState.prp1 = "No";
console.log("prp1:" + newState.prp1);
