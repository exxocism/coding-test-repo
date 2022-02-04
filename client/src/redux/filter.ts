import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const processMethod = createSlice({
  name: "processMethod",
  initialState: [] as string[],
  reducers: {
    setProcessMethod: (state, action: PayloadAction<string[]>) => {
      return action.payload;
    }
  }
});

export const ingridientList = createSlice({
  name: "ingridientList",
  initialState: [] as string[],
  reducers: {
    setIngridientList: (state, action: PayloadAction<string[]>) => {
      return action.payload;
    }
  }
});

export const onlyInConsult = createSlice({
  name: "onlyInConsult",
  initialState: false,
  reducers: {
    setOnlyInConsult: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    }
  }
});

export const { setProcessMethod } = processMethod.actions;
export const { setIngridientList } = ingridientList.actions;
export const { setOnlyInConsult } = onlyInConsult.actions;
export const { reducer: processMethodReducer } = processMethod;
export const { reducer: ingridientListReducer } = ingridientList;
export const { reducer: onlyInConsultReducer } = onlyInConsult;