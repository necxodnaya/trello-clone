import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    click: false,
    tasks: [
        {
            title: '',
            innerTasks: []
        }
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {

        setTask(state) {
            state.click = !state.click
        },

        addTask(state, action) {
            const { value, id, innerTasks } = action.payload

            const newTask = {
                title: value,
                id: id,
                innerTasks: innerTasks
            }
            state.tasks.push(newTask)
        },

        addInnerTask(state, action) {

            const { id, innerTaskValue, idAdd } = action.payload;
            const user = state.tasks.find((item) => item.id === id)

            user.innerTasks.push({
                text: innerTaskValue,
                id: idAdd,
            })

        }
    }
})

export const { setTask, addTask, addInnerTask } = taskSlice.actions;

export default taskSlice.reducer;