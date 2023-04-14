import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: []
  },
  reducers: {
    // action
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setUserList } = userSlice.actions;

export const getAllUsers = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      dispatch(setUserList(response.data));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
