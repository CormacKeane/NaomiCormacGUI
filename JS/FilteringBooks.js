function filterByGenre(genre) {
  const books = document.querySelectorAll('.book');
  books.forEach(book => {
    if (genre === 'all' || book.dataset.genre === genre) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
}
