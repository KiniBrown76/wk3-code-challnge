# Flatdango

Flatdango is a mini web application for Flatiron Movie Theater that allows users to purchase movie tickets. The application fetches movie data from a local JSON server and displays movie details, available tickets, and allows ticket purchases. The application is built using JavaScript, HTML, and CSS.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- View details of the first movie, including poster, title, runtime, showtime, and available tickets.
- Display a list of all movies in the theater.
- Purchase tickets for a movie.
- Indicate sold-out movies by updating the button text and the movie list.

## Prerequisites
- [Node.js](https://nodejs.org/en/) (version 12 or later)
- [JSON Server](https://github.com/typicode/json-server)

## Installation
1. *Clone the repository:*
   ```sh
   git clone 
   cd flatdan (https://github.com/KiniBrown76/wk3-code-challngego)

2. *Install JSON Server:*
npm install -g json-server

3. *Set up the JSON Server:*
- Create a db.json file with the following content:

{
  "films": [
    {
      "id": "1",
      "title": "The Giant Gila Monster",
      "runtime": "108",
      "capacity": 30,
      "showtime": "04:00PM",
      "tickets_sold": 27,
      "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
      "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
    },
    {
      "id": "2",
      "title": "Manos: The Hands Of Fate",
      "runtime": "118",
      "capacity": 50,
      "showtime": "06:45PM",
      "tickets_sold": 44,
      "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
      "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
    }
  ]
}

4. *Start the JSON Server:*
json-server --watch db.json

5. Open the index.html file in a web browser to view the application.

## Usage

On loading the page, the details of the first movie will be displayed.
The list of movies will be displayed on the left side of the page.
Clicking on a movie in the list will display its details.
Clicking the "Buy Ticket" button will decrease the number of available tickets if the movie is not sold out.
If the movie is sold out, the button text will change to "Sold Out" and further ticket purchases will be disabled.
## Project Structure

flatdango/
├── db.json
├── index.html
├── script.js
└── styles.css

db.json: Contains the movie data for the JSON server.
index.html: The main HTML file for the application.
script.js: Contains the JavaScript code for fetching data, displaying movie details, and handling ticket purchases.
styles.css: Contains the CSS styles for the application.

## API Endpoints
GET /films/1: Fetch details of the first movie.
GET /films: Fetch a list of all movies.
PATCH /films/:id: Update the number of tickets sold for a movie.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes relevant tests.

## Author
KiniBrown76

