/*Things we need: 
Title, 
ID,
Description, 
Director, 
Producer, 
release Date, 
RT Score
*/
const baseURL = 'https://ghibliapi.herokuapp.com/films'
let url;
const movieInfo = document.getElementById('mainMovieInfo');
movieInfo.setAttribute('id', 'card');

const button = document.querySelector('.submit');
button.addEventListener('click', fetchResults);

function fetchResults(object) {
    console.log(object);  
    object.preventDefault();
    let url = `${baseURL}?limit=20`;
    console.log(url);
     // FETCH REQUEST
    fetch(url)
        .then(function(response){
        console.log(response);
        return response.json();
        })
        .then(function(data) {
        console.log(data);
        displayResults(data);
    })
}

// fetch(baseURL)
// .then(function(response){
//     console.log(response);
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
//     displayResults(data);
// })

function displayResults(json) {
    while (movieInfo.firstChild) {                                //* remember that child props are always related to elements
        movieInfo.removeChild(movieInfo.firstChild);                //* This line clears out your search results and fills w/ new ones
    }
    let movies = json;
        for(let i = 0; i < movies.length; i++) {
            let movieContainer = document.createElement('div');           //* since we will have results, this is how we'll go about displaying them
            let movieTitle = document.createElement('h1');
            let movieDescrip = document.createElement('h3');
            let directorName = document.createElement('h4')
            let producerName = document.createElement('h4');   //1
            let releaseDate = document.createElement('h4'); 
            let movieReview = document.createElement('h4');
            let current = movies[i];                                 //* This takes whatever article we can find, and will label it as current???
            console.log("Current:", current);

            movieTitle.textContent = current.title;
            movieDescrip.textContent = current.description;
            directorName.textContent = 'Directed by: ' + `${current.director}`;
            producerName.textContent = 'Produced by: ' + `${current.producer}`;
            releaseDate.textContent = 'Released in: ' + `${current.release_date}`;
            movieReview.textContent = 'Rotten Tomato score of: ' + `${current.rt_score}` + '%';

            movieInfo.appendChild(movieContainer);
            movieContainer.appendChild(movieTitle);
            movieContainer.appendChild(movieDescrip);
            movieContainer.appendChild(directorName);
            movieContainer.appendChild(producerName);
            movieContainer.appendChild(releaseDate);
            movieContainer.appendChild(movieReview);
        }
    }


