import axios from "axios";
import { BookAPI } from "@/types/api";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

const fetchBooks = async ({ categoryId, page, size }: BookAPI) => {
  try {
    const response = await axiosInstance.get("/books", {
      params: {
        categoryId,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { fetchBooks, fetchCategories };
