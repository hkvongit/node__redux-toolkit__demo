const createSlice = require("@reduxjs/toolkit").createSlice;
const axios = require("axios");
// Async Thunk
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// This will automatically generate the pending, fulfilled, rejected action types 🌝
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  // 🍎 `createAsyncThunk` under the hood uses the redux thunk library
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((_user) => _user.username));
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  //README: RTK automatically generates actions with the same name of the reducers we are writing. here that are ordered , restocked , e.t.c...
  reducers: {},
  extraReducers: (builder) => {
    // Handing the 🌝 asyncThunk resulting actions
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
