import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [dogs, setDogs] = useState([]);
  const [options, setOptions] = useState([]);
  var apiKey = '89381781542657120b15f4951a87e519'
  var api =  'https://api.themoviedb.org/3';
  const youtube = 'AIzaSyDiodxjx7NdAiT-uBfNWG5ZkBN7VZ4ad7Y'
  const youtubeApiKey = 'AIzaSyCKNBgm18tw8n_3b9VxPWyWqk9kLOVeW7s'
  //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=spiderman%20no%20way%20home&key=[YOUR_API_KEY] HTTP/1.1

  useEffect(() => {
    // fetch('https://api.themoviedb.org/3/discover/movie?api_key=89381781542657120b15f4951a87e519')
    // fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDiodxjx7NdAiT-uBfNWG5ZkBN7VZ4ad7Y')
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=spiderman%20no%20way%20home&key=AIzaSyDiodxjx7NdAiT-uBfNWG5ZkBN7VZ4ad7Y')
      .then(res => res.json())
      .then(res => console.log(res))
  }, [])
  console.log(options)
  return (
    <div className="App">
      TEST
    </div>
  );
}

export default App;
