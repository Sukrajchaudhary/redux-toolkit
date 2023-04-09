import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    points: 1
}
const incByAmt = createAction('account/incrementByAmount')//Action Creatores
const bonusSlices = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.points++
        },
    },
    // extra reducer which is used to match with another reducer
    extraReducers: (builder) => {
        builder.addCase(incByAmt, (state, action) => {
            if (action.payload >= 100) {
                state.points++
            }
        })
    }
})

export const { increment } = bonusSlices.actions
export default bonusSlices.reducer