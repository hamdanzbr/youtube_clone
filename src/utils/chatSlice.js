import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length >= OFFSET_LIVE_CHAT) {
        state.messages.splice(OFFSET_LIVE_CHAT,1); // Remove the oldest message when limit is reached
      }
      state.messages.push(action.payload); // Add the new message to the beginning
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
