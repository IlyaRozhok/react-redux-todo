import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import {useSelector, useDispatch} from "react-redux";
import TaskWrapper from "./components/TaskWrapper/TaskWrapper";
import Storage from "./assets/utils/storage";
import {addTask, deleteTask} from "./store/taskSlice";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch();
    const {isCreateMode} = useSelector(state => state.taskReducer);

    const createTaskHandler = todoItem => {
        Storage.setData(todoItem);
        dispatch(addTask(Storage.getData()))
    }
    const deleteTaskHandler = e => {
        e.stopPropagation();
        dispatch(deleteTask(+e.target.id));
        Storage.deleteHandler(+e.target.id)
    }

    useEffect(() => {
        dispatch(addTask(Storage.getData()))
    },[])

    return (
        <div className="App ">
            <Header/>
            <TaskWrapper removeTask={deleteTaskHandler}/>
            {isCreateMode && <Form dataHandler={createTaskHandler}/>}
            <Footer/>
        </div>
    );
}

export default App;
