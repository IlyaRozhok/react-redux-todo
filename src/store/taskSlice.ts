import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState, ITaskItem} from "./model";

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        createModeHandler: (state, action: PayloadAction<boolean>) => {
            state.isCreateMode = action.payload
        },
        editModeHandler: (state, action: PayloadAction<boolean>) => {
            state.isEditMode = action.payload
        },
        addTask: (state, action: PayloadAction<ITaskItem[]>) => {
            state.taskList = action.payload;
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.taskList = state.taskList.filter((task) => {
                return task.id !== action.payload
            })
        },
        tipsHandler: (state) => {
            state.tipsId = Math.floor(Math.random() * 5);
        }
    }
})

export const {createModeHandler, editModeHandler, addTask, deleteTask, tipsHandler} = taskSlice.actions;
export default taskSlice.reducer;
