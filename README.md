# Learning Redux toolkit (RTK)

Redux toolkit have some conventions to follow.

- All the reducers and actions for a single feature should be written in a single file.
- `Slice` in the file name is a RTK convention, which means the entire application state is split into slices and managed individually.

RTK uses IMMER library within itself to check the state changes.

RTK automatically generates actions with the same name of the reducers we are writing.
