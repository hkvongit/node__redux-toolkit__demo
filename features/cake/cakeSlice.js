const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "Cake",
  initialState: initialState,
  //README: RTK automatically generates actions with the same name of the reducers we are writing. here that are ordered , restocked , e.t.c...
  reducers: {
    ordered: (state) => {
      // RTK uses IMMER library within itself to check the state changes.
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
