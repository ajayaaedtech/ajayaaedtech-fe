import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../app/Api";
import axiosInstance from "../../app/axiosInstance";

// -----------------------------------------------------
// 🔹 Fetch All Courses
// -----------------------------------------------------
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(API?.COURSES.fetchcourse);
      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Failed to fetch courses");

      return data.courses || [];
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// -----------------------------------------------------
// 🔹 Fetch Course Details (by slug)
// -----------------------------------------------------
export const fetchCourseDetails = createAsyncThunk(
  "courses/fetchCourseDetails",
  async (courseSlug, thunkAPI) => {
    try {
      const res = await fetch(`${API?.COURSES.fetchcoursedetails}${courseSlug}`);
      const data = await res.json();

      if (!res.ok)
        throw new Error(data.message || "Failed to fetch course details");

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// -----------------------------------------------------
// 🔹 Fetch My Courses (user-specific)
// -----------------------------------------------------


export const fetchMyCourses = createAsyncThunk(
  "courses/fetchMyCourses",
  async ({ type, value }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(API.COURSES.MY_COURSES, {
        type,
        value,
      });

      return response.data.courses || [];
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

// -----------------------------------------------------
// 🔹 Slice Initial State
// -----------------------------------------------------
const initialState = {
  courses: [],         // all courses
  myCourses: [],       // user enrolled courses
  selectedCourse: null,
  loading: false,
  error: null,
};

// -----------------------------------------------------
// 🔹 Slice Definition
// -----------------------------------------------------
const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    clearSelectedCourse: (state) => {
      state.selectedCourse = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ---------------------------------------------------
      // 📘 Fetch All Courses
      // ---------------------------------------------------
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ---------------------------------------------------
      // 📗 Fetch Course Details
      // ---------------------------------------------------
      .addCase(fetchCourseDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCourse = action.payload;
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ---------------------------------------------------
      // 🧿 Fetch My Courses
      // ---------------------------------------------------
      .addCase(fetchMyCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.myCourses = action.payload;
      })
      .addCase(fetchMyCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// -----------------------------------------------------
// 🔹 Exports
// -----------------------------------------------------
export const { clearSelectedCourse } = courseSlice.actions;
export default courseSlice.reducer;
