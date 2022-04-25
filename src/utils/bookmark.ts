import { Book } from "@/types/book";

const addBookmark = (current: Book, callback?: () => void) => {
  let storage = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  if (storage.some((book: Book) => current.id === book.id)) return;
  storage.push(current);

  localStorage.setItem("bookmarks", JSON.stringify(storage));
  if (callback) {
    callback();
  }
};
const removeBookmark = (current: Book, callback?: () => void) => {
  const storage = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  if (!storage.some((book: Book) => current.id === book.id)) return;
  const removed = storage.filter((book: Book) => current.id !== book.id);

  localStorage.setItem("bookmarks", JSON.stringify(removed));
  if (callback) {
    callback();
  }
};

export { addBookmark, removeBookmark };
