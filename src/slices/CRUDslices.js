import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: []

}
const CRUDslices = createSlice({
    name: 'CRUD',
    initialState,
    reducers: {
        add(state, action) {
            return { ...state, data: [...state.data, action.payload,] }
        },
        deletes(state, action) {
            return {
                ...state,
                data: state.data.filter(f => f.name !== action.payload)
            }
        },
        update(state, action) {
            state.value += action.payload
        },
    },
})

export const { add, deletes, update } = CRUDslices.actions
export default CRUDslices.reducer