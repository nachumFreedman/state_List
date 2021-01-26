const initialState = {};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_STATES":
            return {
                ...state,
                states: action.payload,
            };
        case "NEW_CURRENT_COMPONENT":
            return {
                ...state,
                currentComponent: action.payload
            };
        case "UPDATE_STATE":

            const indexOfUpdatedState = state.states.data.findIndex((currentState) => action.payload.item.state === currentState.state);
            state.states.data[indexOfUpdatedState] = action.payload.item;
            return {
                ...state,
                states: state.states
            }
        default:
            return state;
    }
};
export default Reducer;