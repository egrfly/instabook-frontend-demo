import Book from '../models/Book';

function BookCard({id, title, author, rating}: Book) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2">{author}</h6>
        <span>Average rating: <strong className="text-pink">{rating}</strong></span>
      </div>
    </div>
  );
}

export default BookCard;
