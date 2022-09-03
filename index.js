const store = require("./app/store");

console.log("Initial State of the store", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("State updates : ", store.getState());
});
