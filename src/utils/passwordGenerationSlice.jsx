import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
  name: "password",
  initialState: {
    isIncludeUppercase: false,
    isIncludeLowercase: false,
    isIncludeNumbers: false,
    isIncludeCharacters: false,
    password: "",
  },
  reducers: {
    includeUppercase: (state) => {
      state.isIncludeUppercase = !state.isIncludeUppercase;
    },
    includeLowercase: (state) => {
      state.isIncludeLowercase = !state.isIncludeLowercase;
    },
    includeNumbers: (state) => {
      state.isIncludeNumbers = !state.isIncludeNumbers;
    },
    includeCharacters: (state) => {
      state.isIncludeCharacters = !state.isIncludeCharacters;
    },
    generatePassword: (state, action) => {
      const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerCase = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+=";
      const passwordLength = action.payload;

      let characters = "";
      let generatedPassword = "";

      if (state.isIncludeUppercase) {
        characters += upperCase;
      }
      if (state.isIncludeLowercase) {
        characters += lowerCase;
      }
      if (state.isIncludeNumbers) {
        characters += numbers;
      }
      if (state.isIncludeCharacters) {
        characters += symbols;
      }

      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
      }
      
      state.password = generatedPassword;
    },
  },
});

export const {
  generatePassword,
  includeUppercase,
  includeLowercase,
  includeCharacters,
  includeNumbers,
} = passwordSlice.actions;
export default passwordSlice.reducer;
