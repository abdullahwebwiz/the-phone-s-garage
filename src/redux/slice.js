const { createSlice } = require("@reduxjs/toolkit");
let userid = localStorage.getItem("userid");
let initialState = {
  user_data: {
    user_name: "",
    user_phone: "",
    user_city: "",
    user_address: "",
    password: "",
  },
  userid: userid ? userid : false,
};

const slice = createSlice({
  name: "firstslice",
  initialState,
  reducers: {
    updateUserName: (state, action) => {
      state.user_data.user_name = action.payload;
    },
    updateUserPhone: (state, action) => {
      state.user_data.user_phone = action.payload;
    },
    updateUserCity: (state, action) => {
      state.user_data.user_city = action.payload;
    },
    updateUserAddress: (state, action) => {
      state.user_data.user_address = action.payload;
    },
    updatePassword: (state, action) => {
      state.user_data.password = action.payload;
    },
    updateuserid: (state, action) => {
      state.userid = action.payload;
    },
  },
});

export const {
  updateUserName,
  updatePassword,
  updateUserPhone,
  updateUserAddress,
  updateUserCity,
  updateuserid,
} = slice.actions;
export default slice.reducer;
