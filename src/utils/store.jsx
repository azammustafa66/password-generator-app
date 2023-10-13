import { configureStore } from "@reduxjs/toolkit";
import passwordGenerationSlice from "./passwordGenerationSlice";

const store = configureStore({
  reducer: {
    password: passwordGenerationSlice,
  },
});

export default store;
