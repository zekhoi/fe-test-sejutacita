export interface Category {
  id: number;
  name: string;
}

export interface CategoryState {
  id: number;
  name: string;
  isActive?: boolean;
}

export interface InitialCategoryState {
  categories: Category[];
  isLoading: boolean;
}
