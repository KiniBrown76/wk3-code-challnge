document.addEventListener('DOMContentLoaded', () => {
    const filmsList = document.getElementById('films');
    const poster = document.getElementById('poster');
    const title = document.getElementById('title');
    const runtime = document.getElementById('runtime');
    const showtime = document.getElementById('showtime');
    const availableTickets = document.getElementById('available-tickets');
    const buyTicketButton = document.getElementById('buy-ticket');

    // Fetch and display the first movie's details
    fetch('http://localhost:3000/films/1')
        .then(response => response.json())
        .then(movie => displayMovieDetails(movie));

    // Fetch and populate the movie list
    fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(movies => {
            filmsList.innerHTML = ''; // Clear the placeholder element
            movies.forEach(movie => {
                const li = document.createElement('li');
                li.className = 'film item';
                li.innerText = movie.title;
                if (movie.capacity - movie.tickets_sold === 0) {
                    li.classList.add('sold-out');
                }
                li.addEventListener('click', () => {
                    fetch(`http://localhost:3000/films/${movie.id}`)
                        .then(response => response.json())
                        .then(movieDetails => displayMovieDetails(movieDetails));
                });
                filmsList.appendChild(li);
            });
        });

    // Display movie details
    function displayMovieDetails(movie) {
        poster.src = movie.poster;
        title.innerText = movie.title;
        runtime.innerText = movie.runtime;
        showtime.innerText = movie.showtime;
        const ticketsAvailable = movie.capacity - movie.tickets_sold;
        availableTickets.innerText = ticketsAvailable;

        if (ticketsAvailable > 0) {
            buyTicketButton.innerText = 'Buy Ticket';
            buyTicketButton.disabled = false;
        } else {
            buyTicketButton.innerText = 'Sold Out';
            buyTicketButton.disabled = true;
        }

        buyTicketButton.onclick = () => {
            if (ticketsAvailable > 0) {
                movie.tickets_sold++;
                displayMovieDetails(movie);

                // Update the server with the new number of tickets sold
                fetch(`http://localhost:3000/films/${movie.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        tickets_sold: movie.tickets_sold
                    })
                });
            }
        };
    }
});