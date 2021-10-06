const emailReducer = (state = "", action) => {
    if (action.type === "EMAIL") {
        return state = action.payload.email;
    };
    return state;
}

export default emailReducer;