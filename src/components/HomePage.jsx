import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function HomePage (props) {
  const [projects, setProjects] = useState();

  return (
    <div>
        <NavLink to="/beers">
      <h1>All Beers</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWgZEgOxLNXnlXQSqX0DwQu2IsFKiUXePcQ&usqp=CAU" alt="beers" height="200" width="300"/>
      </NavLink>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus sapien non urna tempus lacinia. Donec mollis leo vitae ipsum vehicula pellentesque. Nunc sodales odio ac mauris congue eleifend. Aenean non porttitor augue. Integer hendrerit turpis nulla, ut malesuada est facilisis eget. Aenean id maximus erat. Donec lobortis enim diam, quis laoreet ante lacinia at. Donec eget mi euismod, consectetur urna nec, pulvinar arcu. Mauris interdum eget elit vel dapibus. Etiam placerat hendrerit commodo. Etiam hendrerit vestibulum imperdiet.</p>

      <NavLink to="/random-beer">
      <h1>Random Beer</h1>
      <img src="https://estrellagalicia.es/beermaster/wp-content/uploads/2017/04/Campeonato-2016-3-1-1024x683.jpg" alt="random-beer" height="200" width="300"/>
      </NavLink>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus sapien non urna tempus lacinia. Donec mollis leo vitae ipsum vehicula pellentesque. Nunc sodales odio ac mauris congue eleifend. Aenean non porttitor augue. Integer hendrerit turpis nulla, ut malesuada est facilisis eget. Aenean id maximus erat. Donec lobortis enim diam, quis laoreet ante lacinia at. Donec eget mi euismod, consectetur urna nec, pulvinar arcu. Mauris interdum eget elit vel dapibus. Etiam placerat hendrerit commodo. Etiam hendrerit vestibulum imperdiet.</p>

      <NavLink to="/new-beer">
      <h1>New Beer</h1>
      <img src="https://images.english.elpais.com/resizer/nZWqe3Njq4P9kNJr8ez7pGvVW3I=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XPEX3XBYYVA3AKYKA3RJYDPWZE.jpg" alt="new-beer" width="300px"/>
      </NavLink>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus sapien non urna tempus lacinia. Donec mollis leo vitae ipsum vehicula pellentesque. Nunc sodales odio ac mauris congue eleifend. Aenean non porttitor augue. Integer hendrerit turpis nulla, ut malesuada est facilisis eget. Aenean id maximus erat. Donec lobortis enim diam, quis laoreet ante lacinia at. Donec eget mi euismod, consectetur urna nec, pulvinar arcu. Mauris interdum eget elit vel dapibus. Etiam placerat hendrerit commodo. Etiam hendrerit vestibulum imperdiet.</p>

    </div>
  );
}

export default HomePage;