import React, { Component } from 'react'; 
import './App.css';
import Movie from './Movie';
/*
const movieTitles=[
  "Matrix",
  "Full Metal Jacket",
  "OldBoy",
  "Star Wars"
]

const movieImages=[
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/The_Matrix_soundtrack_cover.jpg/220px-The_Matrix_soundtrack_cover.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1N9JLvXwOAyUZxXFb1D6sMBXifBmoHrgSVXyETeF3_ut-dxpLXA",
  "https://images-na.ssl-images-amazon.com/images/I/517IKBuIVpL._SY445_.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
]
*/

// Component LifeCycle
// Render : componentWillMount() -> render() -> componentDidMount()

// Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

class App extends Component {

  state = {
    
  }
  
  /* setTimeout(() => {
     this.setState({
       movies: [
         {
           title : "Matrix",
           poster : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/The_Matrix_soundtrack_cover.jpg/220px-The_Matrix_soundtrack_cover.jpg"
         },
         {
           title : "Full Metal Jacket",
           poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1N9JLvXwOAyUZxXFb1D6sMBXifBmoHrgSVXyETeF3_ut-dxpLXA"
         },
         {
           title : "OldBoy",
           poster : "https://images-na.ssl-images-amazon.com/images/I/517IKBuIVpL._SY445_.jpg"
         },
         {
           title : "Star Wars",
           poster : "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
         },
         {
           title : "transportting",
           poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2EwcH7Qxxw4Gk9DdJkSzipaG0-SIFtu2xqw5EGNFVTs2oouJ"
         }
       ]      
     })
   }, 3000) */

  componentDidMount(){
    this._getMovies()    
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movies)
      return <Movie title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}/>
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    console.log(movies)
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loding'} 
      </div>
    )
  }
}

export default App;
