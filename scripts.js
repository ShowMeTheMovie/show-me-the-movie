const movieApp = {}

movieApp.init = () => {
	// movieApp.getMovies()
	movieApp.findMovies()
	movieApp.displayMovieList()
	// movieApp.displayMovies()
}



// movieApp.apikey = '2610afcc'
// movieApp.url = `http://www.omdbapi.com/`

const movieSearchBox = document.querySelector('#movie');
const searchList = document.querySelector('#searchList');



// movieApp.getMovies = (query) =>{

// 	const url = new URL(movieApp.url)
// 	url.search = new URLSearchParams({
// 		apikey: movieApp.apikey,
// 		s: `${query}`
// 	})   
// 	fetch(url)
// 	.then((response) => response.json())
// 	.then((jsonData) => {
// 		const results = jsonData.map(element => element.title)
// 		console.log(results);
// 	})
// }

// movieApp.getMovies = () => {
async function loadMovies(query) {
	const url = `https://omdbapi.com/?s=${query}&page=1&apikey=2610afcc`;
	const res = await fetch(`${url}`);
	const data = await res.json();
	// console.log(data.Search);
	if (data.Response) { movieApp.displayMovieList(data.Search) };
}
// }




movieApp.findMovies = () => {
	let query = (movieSearchBox.value).trim();
	if (query.length > 0) {
		searchList.classList.remove('hideSearchList');
		loadMovies(query);
	} else {
		searchList.classList.add('hideSearchList');
	}
}


movieApp.displayMovieList = (movies) => {
	searchList.innerHTML = "";
	for (let i = 0; i < movies.length; i++) {
		let movieListItem = document.createElement('ul');
		movieListItem.dataset.id = movies[i].imdbID;
		movieListItem.classList.add('searchListItem');
		if (movies[i].Poster != "N/A")
			moviePoster = movies[i].Poster;
		else
			moviePoster = "image not found";

		movieListItem.innerHTML = `
        <li>
            <img src = "${moviePoster}">
        </li>
        <li>
            <h3>${movies[i].Title}</h3>
            <p>${movies[i].Year}</p>
        </li>
        `;
		searchList.appendChild(movieListItem);
	}
}


movieApp.init()

