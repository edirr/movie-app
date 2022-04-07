import './App.css';
import React, { useState, useEffect } from 'react';

//TESTING MIRROR REPO

console.log(process.env.REACT_APP_API_KEY)
const apiKey = process.env.REACT_APP_API_KEY

function App() {
  const [movies , setMovies] = useState([])
  // const apiKey = '89381781542657120b15f4951a87e519'
  // var api =  'https://api.themoviedb.org/3';
  // const youtube = 'AIzaSyDiodxjx7NdAiT-uBfNWG5ZkBN7VZ4ad7Y'
  // const youtubeApiKey = 'AIzaSyCKNBgm18tw8n_3b9VxPWyWqk9kLOVeW7s'
  //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=spiderman%20no%20way%20home&key=[YOUR_API_KEY] HTTP/1.1

  let movieTitle = 'spiderman'
  //Spiderman No way home movieID
  let movieId = 634649
  let genreId = 10751

  useEffect(() => {
    // Movies of certain genre
    // Horror genreId = 27
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`)
    // // //Search by Movie title
    // // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieTitle}`)
    // // // // Trending movies
    // fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`)
    // // // // All possible genres
    // // fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    // // // // Find videos/trailers by movie id
    // // // fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
      .then(res => res.json())
      .then(res => console.log(res))


    // // One then the other
    // let holdMovies = []
    //   fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US&page=1`)
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log(res.results)
    //       holdMovies = res.results
    //     })
    //     .then(() => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US&page=2`) )
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log(res.results)
    //       setMovies([...holdMovies, ...res.results])
    //     })


    // // All at same time

    //     Promise.all([
    //       fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US&page=1`),
    //       fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US&page=2`)
    //     ]).then((responses) => {
    //       console.log('responses',responses)
    //       return Promise.all(responses.map((response) =>{
    //         return response.json();
    //       }));
    //     }).then((data) => {
    //       console.log(data);
    //       setMovies([...data[0].results, ...data[1].results])
    //     }).catch((error) => {
    //       console.log(error);
    //     });


  }, [])

  console.log(movies)
  //youtube 
    // fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDiodxjx7NdAiT-uBfNWG5ZkBN7VZ4ad7Y')
    // fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=spiderman%20no%20way%20home&key=AIzaSyDiodxjx7NdAiT-uBfNWG5ZkBN7VZ4ad7Y')
  return (
    <div className="App">
      {/* <iframe
            className='movie-trailer' 
            src='https://www.youtube.com/watch?v=22oiqgtV6hw'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            // controls='0'
        /> */}
        <iframe 
        className='movie-trailer' 
        width="640" height="360"
        src="https://www.youtube.com/embed/22oiqgtV6hw?enablejsapi=1"
        frameBorder="0"
        allowFullScreen
></iframe>
    </div>
  );
}

export default App;
