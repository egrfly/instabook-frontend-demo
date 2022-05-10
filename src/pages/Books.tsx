import { getBooks } from '../api/api';
import BookCard from '../components/BookCard';

function Books() {
  const books = getBooks();

  return (
    <main className="container pt-6 py-4">
      <div className="card">
        <div className="card-body">
          <h1 className="display-4">Books</h1>
          {books === null
            ? 'Loading...'
            : books.map(book => <BookCard id={book.id} title={book.title} author={book.author} rating={book.rating} />)}
        </div>
      </div>
    </main>
  );
}

export default Books;
