import React from 'react';
import Preloader from "../preloader/preloader.jsx";
import BigTiddieVoid from "../../images/void.jpg";

import "./home.css";

const Home = () => {
  return (
      <div className="App">
          <div className="container">
          <img className="void-background" src={BigTiddieVoid} />
              <h1>
                  Big Tiddie Network
                  <br />
                  Coming Soon
              </h1>
              <div>
              <iframe src="https://discord.com/widget?id=651071957475000341&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
              </div>
            <Preloader />
          </div>
      </div>
  );
};

export default Home;