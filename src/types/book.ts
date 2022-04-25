export interface BookState {
  books: Book[];
  books_to_show: Book[];
  isReady: boolean;
  pagination: {
    keyword: string;
    book_per_page: number;
    current_page: number;
  };
}

export interface Book {
  id: number;
  title: string;
  category_id: number;
  authors: string[];
  cover_url: string;
  description: string;
  sections: Section[];
  audio_length: number;
}

export interface Section {
  title: string;
  content: string;
}
