import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messageList : []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messageList = [action.payload, ...state.messageList]
            state.messageList.splice(10,1)
        }
    }
})

export const { addMessage } = chatSlice.actions; 

export default chatSlice.reducer