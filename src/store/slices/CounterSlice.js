import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "counter";

const initialState = { count: 0, step: 1 };

const counterSlice = createSlice({
  initialState,
  name: SLICE_NAME,
  reducers: {},
});
