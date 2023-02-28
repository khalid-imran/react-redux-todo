import Header from "./components/Header";
import { Provider } from 'react-redux'
import store from './redux/store'
import Todo from "./components/Todo/Todo";
function App() {
    return (
        <Provider store={store}>
            <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
                <Header />
                <Todo />
            </div>
        </Provider>

    );
}

export default App;
