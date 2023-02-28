export default function initialState() {
    let todos = JSON.parse(localStorage.getItem('todos'))
    if (todos) {
        return todos
    } else {
        return []
    }
}
