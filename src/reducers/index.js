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
                storenavigation.push("Modal")
            })
            return {
                ...store,
                currentModalState: action.payload
            };
        case "UPDATE_STATE":
            const indexOfUpdatedState = storestates.data.findIndex((currentState) => action.payload.item.state === currentstorestate);
            storestates.data[indexOfUpdatedState] = action.payload.item;
            return {
                ...store,
                states: storestates
            }
        default:
            return store;
    }
};
export default Reducer;