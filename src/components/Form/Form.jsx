import './form.css';
import {useState} from "react";
import {useSelector} from "react-redux";

const tips = {
    0: 'Keep projects simple—if you have a big project, consider dividing it into smaller tasks. You can also offer several tasks at the same time (rather than sequentially).',
    1: 'Write a catchy title (BUT also make sure it’s clear and descriptive!).',
    2: 'Write your tasks in plain language. Use full office names rather than acronyms. Avoid using office-specific slang. ',
    3: 'Many tasks do not require participants to be experts in a given field. If you are looking for somebody who is willing to learn a new skill, clearly state that.',
    4: 'Dont make it harder :)'
}


const Form = ({dataHandler}) => {
    const {tipsId} = useSelector(state => state.taskReducer)
    const [titleValue, setTitleValue] = useState('');
    const titleHandler = (e) => setTitleValue(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();
        dataHandler(titleValue);
    }

    return (
        <form className="form" action="#" method="POST" onSubmit={(e) => submitHandler(e)}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
                {/*<div className="circle">*/}
                {/*    <div className="before"></div>*/}
                {/*    <div className="after"></div>*/}
                {/*</div>*/}
                <div className="space-y-6 bg-violet-100 px-4 py-5 sm:p-6">
                    <div className="grid gap-6">

                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="todo-form"
                                   className="block text-sm font-medium text-gray-00">
                                What should be done?
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    onChange={(e) => titleHandler(e)}
                                    value={titleValue}
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="title-input block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Determine your goal"
                                />
                            </div>
                        </div>
                    </div>
                    {/*FORM PART FOR THE TASK BODY*/}

                    {/*<div>*/}
                    {/*    <label htmlFor="body" className="block text-sm font-medium text-gray-700">*/}
                    {/*        Body*/}
                    {/*    </label>*/}
                    {/*    <div className="mt-1">*/}
                    {/*  <textarea*/}
                    {/*      onChange={(e) => bodyHandler(e)}*/}
                    {/*      value={bodyValue}*/}
                    {/*      id="body"*/}
                    {/*      name="body"*/}
                    {/*      rows={3}*/}
                    {/*      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"*/}
                    {/*      placeholder="Determine your goal"*/}
                    {/*  />*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                </div>
                <div className="container-btn bg-violet-200 px-4 py-3 text-right sm:px-6">
                    <p className="tips mt-1 font-medium text-sm text-gray-500">
                        Tip: {tips[tipsId]}
                    </p>
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Create
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form;
