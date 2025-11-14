import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔹 Fetch all course names
export const fetchCourses = createAsyncThunk("courses/fetchCourses", async (_, thunkAPI) => {
  try {
    const response = await fetch("http://localhost:5001/api/course/names");
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Failed to fetch courses");
    return data.courses || [];
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

// 🔹 Fetch detailed course info

// export const fetchCourseDetails = createAsyncThunk(
//   "courses/fetchCourseDetails",
//   async (courseId, thunkAPI) => {
//     try {
//       const res = await fetch(`http://localhost:5001/api/course/details/${courseId}`);
//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || "Failed to fetch course details");

//       // 👇 The API returns the course directly, not nested in "course"
//       console.log("Fetched detail data:", data);
//       return data; 
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

export const fetchCourseDetails = createAsyncThunk(
  "courses/fetchCourseDetails",
  async (courseSlug, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:5001/api/course/details/${courseSlug}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch course details");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);



const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    selectedCourse: null,
    loading: true,
    error: null,
  },
  reducers: {
    clearSelectedCourse: (state) => {
      state.selectedCourse = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 📘 All courses
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
      // 📗 Single course details
      .addCase(fetchCourseDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        state.loading = false;
        console.log("actionpayload", action.payload)
        state.selectedCourse = action.payload;
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedCourse } = courseSlice.actions;
export default courseSlice.reducer;
