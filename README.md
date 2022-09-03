# Learning Redux toolkit (RTK)

Learning tutorial: https://www.youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3

Redux toolkit have some conventions to follow.

- All the reducers and actions for a single feature should be written in a single file.
- `Slice` in the file name is a RTK convention, which means the entire application state is split into slices and managed individually.

RTK uses IMMER library within itself to check the state changes.

RTK automatically generates actions with the same name of the reducers we are writing.

## Extra reducers

This can be a useful reducer type if you want make an action in another slice as a side effect of an action on a particular slice. In this example it is the reducer to give an icecream for free when anyone buy a cake from the shop.

## Async thunk

Used to manage the async operations in the RTK store.
RTK provides a `createAsyncThunk` function to implement the creation and dispatching of async actions.
