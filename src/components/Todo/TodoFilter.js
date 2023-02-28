import {useDispatch, useSelector} from "react-redux";
import {filterColor, filterStatus} from "../../redux/filter/action";

export default function TodoFilter() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo)
    const filter = useSelector((state) => state.filter)
    const leftTask = todos.filter(todo => todo.complete === false)
    const taskLeft = () => {
        if (leftTask.length === 1) {
            return leftTask.length+ ' task left'
        } else if (leftTask.length === 0) {
            return 'No task left'
        } else {
            return leftTask.length+ ' tasks left'
        }
    }
    const filterByStatus = (status) => {
        dispatch(filterStatus(status))
    }
    const filterByColor = (color) => {
        if (filter.color.includes(color)) {
            dispatch(filterColor(color, 'removed'))
        } else {
            dispatch(filterColor(color, 'added'))
        }
    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{taskLeft()}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${filter.status === 'All' && 'font-bold'}`} onClick={() => filterByStatus('All')}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${filter.status === 'Incomplete' && 'font-bold'}`} onClick={() => filterByStatus('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${filter.status === 'Complete' && 'font-bold'}`} onClick={() => filterByStatus('Complete')}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={() => filterByColor('green')}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${filter.color.includes('green') && 'bg-green-500'}`}
                ></li>
                <li onClick={() => filterByColor('red')}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filter.color.includes('red') && 'bg-red-500'}`}
                ></li>
                <li onClick={() => filterByColor('yellow')}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filter.color.includes('yellow') && 'bg-yellow-500'}`}
                ></li>
            </ul>
        </div>
    )
}
