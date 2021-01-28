export const saveStates = (json) => ({
    type: "NEW_STATES",
    payload: json
});

export const openModal = (state) => ({
    type: "OPEN_MODAL",
    payload: state
})
export const closeModal = () => ({
    type: "CLOSE_MODAL",
    payload: false
})


export const updateStates = (updatedState) => ({
    type: "UPDATE_STATE",
    payload: updatedState
})