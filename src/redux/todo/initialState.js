export default function initialState() {
    let todos = localStorage.getItem('todos')
    if (todos) {
        return todos
    } else {
        return []
    }
}
