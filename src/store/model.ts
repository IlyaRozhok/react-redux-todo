export interface ITaskItem {
    title: string
    id?: number
    status?: boolean
}

export interface ITaskList {
    taskList: ITaskItem[]
    isEditMode: boolean
    isCreateMode: boolean
    tipsId: number
}

export const initialState: ITaskList = {
    taskList: [
        {
            title: '',
            id: 0,
            status: false
        }
    ],
    isEditMode: false,
    isCreateMode: false,
    tipsId: 0
}

