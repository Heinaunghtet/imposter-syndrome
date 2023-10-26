import TodoItem from "@/components/TodoItem";
const TodosList = (props) => {
    const { todos } = props;
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default TodosList;