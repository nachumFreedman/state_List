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
            }
        default:
            return state;
    }
};
export default Reducer;