import React from 'react';
import Preloader from "../preloader/preloader.jsx";
import BigTiddieVoid from "../../images/void.jpg";

import "./home.css";

const Home = () => {
  return (
      <div className="App">
          <div className="container">
              <h1>
                  Big Tiddie Network
                  <br />
                  <br />
                  Coming Soon
              </h1>
              <img className="void-background" src={BigTiddieVoid} />
            <Preloader />
          </div>
      </div>
  );
};

export default Home;