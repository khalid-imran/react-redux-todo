import {useDispatch} from "react-redux";
import {completeAllTodo, deleteAllCompleted} from "../../redux/todo/action";

export default function TodoAction() {
    const dispatch = useDispatch()
    const completeAll = () => {
        dispatch(completeAllTodo())
    }
    const clearCompleted = () => {
        dispatch(deleteAllCompleted())
    }
    return (
        <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li className="flex space-x-1 cursor-pointer" onClick={completeAll}>
                <img className="w-4 h-4" src="./images/double-tick.png" alt="Complete"/>
                <span>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer"  onClick={clearCompleted}>Clear completed</li>
        </ul>
    )
}
