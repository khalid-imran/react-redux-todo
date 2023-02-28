export default function saveToLocalStorage(state) {
    localStorage.setItem('todos', JSON.stringify(state));
}

