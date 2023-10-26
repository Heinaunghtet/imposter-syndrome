import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";

const TodosLogic = () => {

    const todos = [
        {
            id: 1,
            title: "Complete React tutorial",
            completed: false
        },
        {
            id: 2,
            title: "Implement basic to-do list UI",
            completed: false
        },
        {
            id: 3,
            title: "Add functionality to add new to-do items",
            completed: false
        },
        {
            id: 4,
            title: "Implement to-do item deletion",
            completed: false
        },
        {
            id: 5,
            title: "Add checkbox to mark to-do items as complete",
            completed: false
        },
        {
            id: 6,
            title: "Implement filtering of completed tasks",
            completed: false
        },
        {
            id: 7,
            title: "Style the to-do list and make it responsive",
            completed: false
        },
        {
            id: 8,
            title: "Persist to-do list data using localStorage",
            completed: false
        },
        {
            id: 9,
            title: "Add drag-and-drop functionality for reordering tasks",
            completed: false
        },
        {
            id: 10,
            title: "Write unit tests for the to-do list component",
            completed: false
        }
    ];


    return (

        <div>
            <InputTodo></InputTodo>
            <TodosList todos={todos}></TodosList>
        </div>

    )
}

export default TodosLogic