export const saveStates = (json) => ({
    type: "NEW_STATES",
    payload: json
});

export const stateForDetails = (state) => ({
    type: "STATE_DETAILS",
    payload: state
})

export const updateStates = (updatedState) => ({
    type: "UPDATE_STATE",
    payload: updatedState
})