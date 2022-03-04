import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function BeerDetails() {
  const [beer, setBeer] = useState({});
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      .then((response) => setBeer(response.data))
      .catch((error) => console.log(error));
  }, [params.beerId]);
  return beer._id ? (
    <div key={beer._id}>
      <Header />
      <h1>Beer Details</h1>
      <img src={beer.image_url} alt="beer-img" width="100" />
      <h3>{beer.name}</h3>
      <h3>{beer.tagline}</h3>
      <h4>{beer.first_brewed}</h4>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  ) : (
    <div>LOADING RANDOM BEER</div>
  );
}
