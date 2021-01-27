const initialStore = {};

const Reducer = (store = initialStore, action) => {
    switch (action.type) {
        case "NEW_STATES":
            return {
                ...store,
                states: action.payload,
            };
        case "SAVE_NAVIGATION":
            return {
                ...store,
                navigation: action.payload,
            };
        case "OPEN_MODAL":
            setTimeout(() => {
                store.navigation.push("Modal")
            })
            return {
                ...store,
                currentModalState: action.payload
            };
        case "UPDATE_STATE":
            const indexOfUpdatedState = store.states.data.findIndex((currentState) => action.payload.item.state === currentState);
            store.states.data[indexOfUpdatedState] = action.payload.item;
            return {
                ...store,
                states: store.states
            }
        default:
            return store;
    }
};
export default Reducer;