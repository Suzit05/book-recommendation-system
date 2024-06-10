document.getElementById('getRecommendations').addEventListener('click', () => {
    const bookName = document.getElementById('bookName').value.toLowerCase();

    const recommendations = {
        "harry potter": [
            { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy', rating: 4.7, image: 'https://m.media-amazon.com/images/I/71RVt35ZAbL._AC_UF1000,1000_QL80_.jpg' },
            { title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling', genre: 'Fantasy', rating: 4.6, image: 'https://m.media-amazon.com/images/I/818umIdoruL._AC_UF1000,1000_QL80_.jpg' },
            // Add more book recommendations for Harry Potter
        ],
        "dune": [
            { title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', rating: 4.5, image: 'https://m.media-amazon.com/images/I/81nq+ewtkcL._AC_UF1000,1000_QL80_.jpg' },
            { title: 'Dune Messiah', author: 'Frank Herbert', genre: 'Science Fiction', rating: 4.3, image: 'https://m.media-amazon.com/images/I/817Xh+bqwOL._AC_UF1000,1000_QL80_.jpg' },
            // Add more book recommendations for Dune
        ],
        // Add more books with images here
    };

    const filteredRecommendations = recommendations[bookName] || [];

    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    if (filteredRecommendations.length > 0) {
        filteredRecommendations.forEach((book, index) => {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'p-4 bg-gray-200 rounded-lg shadow-md cursor-pointer transform transition duration-500 ease-in-out delay-' + (index + 1) + ' hover:scale-105';
            bookDiv.style.animation = 'fadeInUp 0.5s';
            bookDiv.innerHTML = `<div class="flex items-center">
                                    <img src="${book.image}" class="w-16 h-16 rounded-full mr-4" alt="Book Cover">
                                    <div>
                                        <h3 class="text-xl font-semibold">${book.title}</h3>
                                        <p class="text-gray-700">Author: ${book.author}</p>
                                        <p class="text-gray-700">Genre: ${book.genre}</p>
                                        <p class="text-gray-700">Rating: ${book.rating}</p>
                                    </div>
                                </div>`;
            bookDiv.addEventListener('click', () => {
                localStorage.setItem('selectedBook', JSON.stringify(book));
                window.location.href = 'book.html';
            });
            recommendationsDiv.appendChild(bookDiv);
        });
    } else {
        recommendationsDiv.innerHTML = '<p class="text-gray-700">No recommendations found for this book.</p>';
    }
});
