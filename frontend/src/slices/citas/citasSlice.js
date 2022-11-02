import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  citas: [],
  edit: {},
};

export const postCita = createAsyncThunk("Citas/postCita", async (cita) => {
  const res = await fetch("http://localhost:4000/citas", {
    method: "POST",
    body: JSON.stringify(cita),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();
  return result;
});

export const deleteCita = createAsyncThunk("Citas/deleteCita", async (cita) => {
  const res = await fetch("http://localhost:4000/citas", {
    method: "DELETE",
    body: JSON.stringify(cita),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();
  return result;
});

export const editCita = createAsyncThunk("Citas/editCita", async (cita) => {
  const res = await fetch("http://localhost:4000/citas", {
    method: "PUT",
    body: JSON.stringify(cita),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();
  return result;
});

export const getCitas = createAsyncThunk("Citas/getCitas", async (cita) => {
  const res = await fetch("http://localhost:4000/citas");
  const result = await res.json();
  return result;
});

export const citasSlice = createSlice({
  name: "citas",
  initialState,
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postCita.fulfilled, (state, action) => {
        console.log(action);
        state.citas = [...state.citas, action.payload];
      })
      .addCase(postCita.rejected, (state, action) => {
        console.log("No pasó");
      })
      .addCase(getCitas.fulfilled, (state, action) => {
        state.citas = action.payload;
      })
      .addCase(editCita.fulfilled, (state, action) => {
        const newArr = state.citas.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        state.citas = newArr;
      })
      .addCase(deleteCita.fulfilled, (state, action) => {
        console.log("llegó");
        const newArr = state.citas.filter(
          (item) => item.id !== action.payload.id
        );
        state.citas = newArr;
      });
  },
});

export const { setEdit } = citasSlice.actions;

export default citasSlice.reducer;
