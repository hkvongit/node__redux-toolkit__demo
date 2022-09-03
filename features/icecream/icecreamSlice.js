const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecreams: 20,
};
const icecreamSlice = createSlice({
  name: "Icecream",
  initialState: initialState,
  //README: RTK automatically generates actions with the same name of the reducers we are writing. here that are ordered , restocked , e.t.c...
  reducers: {
    ordered: (state) => {
      // RTK uses IMMER library within itself to check the state changes.
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    // Case: Giving offer to the customer when they buy one 🧁 cake they get an 🍦 icecream for free.
    return builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
