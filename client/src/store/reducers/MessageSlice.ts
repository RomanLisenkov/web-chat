import { createSlice } from "@reduxjs/toolkit";
import { fetchGetMessages } from "./ActionCreators";

interface MessagesState {
  messages: { message: string; login: string; userId: number }[];
  error: string | null | undefined;
  isLoading: boolean;
}

const initialState: MessagesState = {
  messages: [],
  error: null,
  isLoading: false,
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage:(state, action) => {
      state.messages.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGetMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetMessages.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default messageSlice.reducer;
export const { addMessage } = messageSlice.actions;