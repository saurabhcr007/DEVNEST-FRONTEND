const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                title: action.payload,
                id: Date.now(),
                complete: false
            }
            return [...state, newTodo];

        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.payload);

        case "TOGGLE_TODO":
            let todo = state.find((item) => { return item.id === action.payload })
            if (todo) {
                todo.complete = !todo.complete;
            };
            return [...state]

        default:
            return state;
    }
}

export default TodoReducer;