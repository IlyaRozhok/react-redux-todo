import {XMarkIcon} from '@heroicons/react/24/outline';
import './taskItem.css';
import {StarIcon} from "@heroicons/react/20/solid";

const TaskItem = (props) => {

    const {title, id, deleteTaskHandler} = props;

    const removeItem = (e) => {
        deleteTaskHandler(e)
    }

    return (
        <div className="task-item">
            <div className="bg-indigo-600">
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2">
              <StarIcon className="h-6 w-6 text-white" aria-hidden="true"/>
            </span>
                            <p className="ml-3 truncate font-medium text-white">
                                <span className="md:hidden">{title}</span>
                                <span
                                    className="hidden md:inline">{title}</span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                            <button
                                // href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                            >
                                Edit
                            </button>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                id={id}
                                onClick={(e) => removeItem(e)}
                                type="button"
                                className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            >
                                <XMarkIcon id={id} className="h-6 w-6 text-white" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskItem;
