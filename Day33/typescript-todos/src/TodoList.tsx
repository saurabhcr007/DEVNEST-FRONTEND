interface TodoListProps{
    title:string,
    done:boolean
};
export const TodoList = ({title,done}:TodoListProps) => {
    return (
        <h2>
            {title}
        </h2>
    )
}
