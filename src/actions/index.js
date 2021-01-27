export const saveStates = (json) => ({
    type: "NEW_STATES",
    payload: json
});

export const openModal = (state) => ({
    type: "OPEN_MODAL",
    payload: state
})

export const saveNavigation = (navigation) => ({
    type: "SAVE_NAVIGATION",
    payload: navigation
})

export const updateStates = (updatedState) => ({
    type: "UPDATE_STATE",
    payload: updatedState
})