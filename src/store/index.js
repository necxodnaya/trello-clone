import { configureStore } from "@reduxjs/toolkit"; 
import taskSlice from "./slices/taskSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer : {
        user : userSlice,
        tasks : taskSlice,
    }
});