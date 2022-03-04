import Header from "../components/Header"
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";

export default function Beers() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
          console.log("Beers data",response.data)
          setBeers(response.data)
        })
        .catch((err) => console.log(err))
    }, [])
  

  return (
    <div>
    <Header />
      <h1>BEERS</h1>
      {beers.map((beer) => (
          <div>
          <Link to={`/beer/${beer._id}`}><img src={beer.image_url} alt="beers" height="200"/></Link>
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
          <h4>Created by:{beer.contributed_by}</h4>
          </div>
      ))}
    </div>
  );
}
