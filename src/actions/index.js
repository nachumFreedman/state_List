export const saveStates = (json) => ({
    type: "NEW_STATES",
    payload: json
});

export const changeComponent = (component) => ({
    type: "NEW_CURRENT_COMPONENT",
    payload: component
})