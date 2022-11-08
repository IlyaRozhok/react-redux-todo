class Storage {
    #DB_KEY_DASK_LIST = 'TASK_LIST';
    #id = 1;

    #getId() {
        return this.hasData() ? 1 + this.getData().at(0).id : this.#id;
    }

    getData() {
        return JSON.parse(localStorage.getItem(this.#DB_KEY_DASK_LIST));
    }

    hasData() {
        return (!!this.getData() && !!this.getData().length);
    }

    setData(title) {
        if (typeof title !== 'string') throw new Error('Provided title should be in a String type')
        const taskData =
            [{
                title: title,
                id: this.#getId(),
                status: false
            }];

        if (!this.hasData()) {
            localStorage.setItem(this.#DB_KEY_DASK_LIST, JSON.stringify(taskData))
            return taskData
        }

        const storedData = this.getData();
        const updatedData = [...taskData, ...storedData]
        localStorage.setItem(this.#DB_KEY_DASK_LIST, JSON.stringify(updatedData))
        return updatedData
    }

    deleteHandler(id) {
        const filteredData = this.getData().filter(task => task.id !== id);
        localStorage.setItem(this.#DB_KEY_DASK_LIST, JSON.stringify(filteredData))
    }


}

export default new Storage();
