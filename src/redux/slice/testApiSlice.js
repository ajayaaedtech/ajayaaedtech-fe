import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Hardcoded endpoint
const API_URL = "http://localhost:5001/api/course/my-courses";

// ✅ Async thunk for POST request
export const fetchTestCourses = createAsyncThunk(
  "testApi/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const payload = {
        type: "userId",
        value: "69086d96f2e2bd7aa6f464a0",
      };

      console.log("🚀 Sending payload to API:", payload);

      const { data } = await axios.post(API_URL, payload, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ API response (Redux Toolkit):", data);
      return data;
    } catch (err) {
      console.error("❌ API error:", err.response?.data || err.message);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// ✅ Slice setup
const testApiSlice = createSlice({
  name: "testApi",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchTestCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default testApiSlice.reducer;
