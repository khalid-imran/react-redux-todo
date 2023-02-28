import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTodo} from "../../redux/todo/action";

export default function TodoFrom() {
    const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const handleInput = (event) => {
        setInput(event.target.value);
    }
    const getNextId = () => {
        const nextId = todos.reduce((prevValue, element) => Math.max(prevValue, element.id), 0)
        return nextId + 1
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (input) {
            let todo = {text: input, id: getNextId()}
            dispatch(addTodo(todo))
            setInput('')
        }
    }
    return (
        <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={submitHandler}>
            <img src="./images/notes.png" className="w-6 h-6" alt="Add todo"/>
            <input type="text" placeholder="Type your todo" value={input} onChange={handleInput}
                className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            />
            <button type="submit" className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"></button>
        </form>
    )
}
