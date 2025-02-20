import { createSlice } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
  name: "crudSlice",
  initialState: { students: [] },
  reducers: {
    addData: (state, action) => {
        state.students.push(action.payload)
    },
    deleteData: (state, action) => {
      let data  = state.students.filter((item)=>item.id!=action.payload)
      state.students = data
        
    },
    updateData: (state, action) => {
      state.students.map((e,i)=>{
        if(e.id == action.payload.editIndex){
            e.name = action.payload.name
            e.sub = action.payload.sub
        }else{
            e
        }
      })  
    },
  },
});

export const { addData, deleteData, updateData } = crudSlice.actions;
export default crudSlice.reducer;
