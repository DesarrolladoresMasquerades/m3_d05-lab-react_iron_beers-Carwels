import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Beers from "./components/Beers"
import NewBeer from "./components/NewBeer"
import RandomBeer from "./components/RandomBeer"
import BeerDetails from "./components/BeerDetails"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
   

    <Routes>
      <Route exact path="/random-beer" element={<RandomBeer />} />
      <Route exact path="/new-beer" element={<NewBeer />} />
      <Route exact path="/beer/:beerId" element={<BeerDetails />} />
      <Route exact path="/beers" element={<Beers />} />
      <Route exact path="/" element={<HomePage/>} />
    </Routes>
    </div>
  );
}

export default App;
