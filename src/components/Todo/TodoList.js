import {useDispatch} from "react-redux";
import {toggleTodo, deleteTodo, updateColor} from "../../redux/todo/action";

export default function TodoList({todo}) {
    const dispatch = useDispatch()
    const handleComplete = (todo) => {
        let param = {
            id: todo.id,
            complete: !todo.complete // if completed then make incomplete otherwise make complete
        }
        dispatch(toggleTodo(param))
    }
    const handleColor = (id, color) => {
        let param = {
            id, color
        }
        dispatch(updateColor(param))
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    return (
        <div key={todo.id}
             className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
        >
            <div
                className={`rounded-full bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center
                items-center mr-2 ${!todo.complete && 'border-gray-400'} ${todo.complete && 'border-green-500 focus-within:border-green-500'}`}
            >
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => handleComplete(todo)}
                    className="opacity-0 absolute rounded-full"
                />
                {todo.complete && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                    </svg>
                )}

            </div>

            <div className={`select-none flex-1 line ${todo.complete && 'line-through'}`}>
                {todo.text}
            </div>

            <div onClick={() => handleColor(todo.id, 'green')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${todo.color === 'green' && 'bg-green-500'}`}
            ></div>

            <div onClick={() => handleColor(todo.id, 'yellow')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${todo.color === 'yellow' && 'bg-yellow-500'}`}
            ></div>

            <div onClick={() => handleColor(todo.id, 'red')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${todo.color === 'red' && 'bg-red-500'}`}
            ></div>

            <img onClick={() => handleDelete(todo.id)} src="./images/cancel.png" className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer" alt="Cancel"/>
        </div>
    )

}
