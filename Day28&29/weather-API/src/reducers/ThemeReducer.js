const ThemeReducer = (state = false, action) => {
    if (action.type === "TOGGLE_THEME") {
        return !state;
    };
    return state;
};

export default ThemeReducer;