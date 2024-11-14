import React,{useState, useEffect} from 'react'
import axios from '../../utils/axios'
import requests from '../../utils/requests';
import "./banner.css"

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        //this axios and requests are the one we created in utils folder
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request)
        setMovie(
          request.data.results[
            //upon page refresh, randomly select one image and display
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  
  //truncate function typically "cuts off" data to a specified length. It can be used with strings or numbers
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      // inline css
      style={{
        backgroundSize: "cover",
        //Optional Chaining(?)--> prevents errors and returns undefined if any part of the chain is null or undefined.
        backgroundImage: `url('https://images.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
}


export default Banner
