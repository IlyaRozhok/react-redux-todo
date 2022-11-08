import {useSelector} from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import doesntExist from "../../assets/img/doesntExist.png";

const TaskWrapper = ({removeTask}) => {
    const {taskList} = useSelector(state => state.taskReducer);

    return (
        <div>
            {
                taskList
                &&
                // eslint-disable-next-line array-callback-return
                taskList.map((task) => {
                    if (task.id) {
                        return (
                            <div key={task.id}>
                                <TaskItem
                                    deleteTaskHandler={removeTask}
                                    title={task.title}
                                    id={task.id}
                                />
                            </div>
                        )
                    }
                })
            }
            {!taskList.length &&
                <div className="flex justify-center mt-20">
                    <img
                        style={{maxWidth: '50%'}}
                        className="flex-auto"
                        src={doesntExist}
                        alt="doesnt exists"
                    />
                </div>
}
        </div>
    )
}

export default TaskWrapper;
