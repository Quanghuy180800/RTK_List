import { configureStore } from "@reduxjs/toolkit";
import users from "../redux/usersSlice";
export default configureStore({
  reducer: {
    users
  }
});
