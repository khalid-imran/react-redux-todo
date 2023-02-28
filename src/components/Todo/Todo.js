import TodoFrom from "./TodoFrom";
import TodoAction from "./TodoAction";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import {useSelector} from "react-redux";

export default function Todo() {
    const todos = useSelector((state) => state.todo)
    const filter = useSelector((state) => state.filter)
    const filterByStatus = (todo) => {
        switch (filter.status) {
            case 'Complete':
                return todo.complete
            case 'Incomplete':
                return !todo.complete
            default:
                return true
        }
    }
    const filterByColor = (todo) => {
        if (filter.color.length > 0) {
            return filter.color.includes(todo?.color)
        }
        return true
    }
    const renderTodos = () => {
        if (todos.length > 0) {
            return todos.filter(filterByStatus).filter(filterByColor).map(todo => {
                return (
                    <TodoList todo={todo} key={todo.id}/>
                )
            })
        } else {
            return (
                <div className="text-center">
                    <p >There are currently no todo available</p>
                    <p > Click “+” to create new one.</p>
                </div>
            )
        }
    }
    return (
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            <div>
                <TodoFrom />
                <TodoAction />
            </div>
            <hr className="mt-4"/>
            <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                {renderTodos()}
            </div>
            <hr className="mt-4"/>
            <TodoFilter />
        </div>
    )
}
