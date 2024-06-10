document.addEventListener('DOMContentLoaded', () => {
    const book = JSON.parse(localStorage.getItem('selectedBook'));

    if (book) {
        document.getElementById('bookTitle').textContent = book.title;
        document.getElementById('bookAuthor').textContent = `Author: ${book.author}`;
        document.getElementById('bookGenre').textContent = `Genre: ${book.genre}`;
        document.getElementById('bookRating').textContent = `Rating: ${book.rating}`;

        const searchLink = `https://www.google.com/search?q=${encodeURIComponent(book.title + ' ' + book.author)}`;
        const buyLink = `https://www.amazon.com/s?k=${encodeURIComponent(book.title + ' ' + book.author)}`;

        document.getElementById('searchLink').href = searchLink;
        document.getElementById('buyLink').href = buyLink;
    } else {
        document.body.innerHTML = '<p class="text-gray-700">No book details found.</p>';
    }
});
