const usernameReducer = (state = "", action) => {
    if (action.type === "USERNAME") {
        return state = action.payload.username;
    };
    return state;
};

export default usernameReducer;