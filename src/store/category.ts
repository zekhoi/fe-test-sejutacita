import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCategories } from "@/services/fetch";

// import types
import {
  Category,
  CategoryState,
  InitialCategoryState,
} from "@/types/category";
import { StoreState } from "@/types/store";

const initialState: InitialCategoryState = {
  categories: [],
  isReady: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    ready: (state) => {
      if (!state.isReady) {
        state.isReady = true;
      }
    },
    receive: (state, action: PayloadAction<CategoryState[]>) => {
      if (state.isReady) {
        state.categories = action.payload;
        state.isReady = false;
      }
    },
    update: (state, action: PayloadAction<{ choose: number }>) => {
      if (state.isReady) {
        state.categories = state.categories.map(({ id, name }) => ({
          id,
          name,
          isActive: id === action.payload.choose ? true : false,
        }));
        state.isReady = false;
      }
    },
  },
});

const getAllCategory = async (dispatch: Function) => {
  dispatch(ready());
  const categories = await fetchCategories();
  dispatch(
    receive(
      categories.map(({ id, name }: CategoryState) => ({
        id,
        name,
        isActive: id === 1 ? true : false,
      }))
    )
  );
};

const currentCategory = createSelector(
  (state: StoreState) => state.category.categories,
  (categories) => {
    return categories?.filter(
      (category: CategoryState) => category.isActive
    )[0];
  }
);

export { getAllCategory, currentCategory };
export const { ready, receive, update } = categorySlice.actions;
export default categorySlice.reducer;
