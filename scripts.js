const movieApp = {}

movieApp.init = ()=>{
	movieApp.getMovies()
	// movieApp.displayMovies()
}



movieApp.apikey = '2610afcc'
movieApp.url = `http://www.omdbapi.com/`

movieApp.getMovies = (query) =>{
 
	const url = new URL(movieApp.url)
	url.search = new URLSearchParams({
		apikey: movieApp.apikey,
		s: `${query}`
	})   
	fetch(url)
	.then((response) => response.json())
	.then((jsonResult) => {
		console.log(jsonResult);
	})
}


movieApp.init()
