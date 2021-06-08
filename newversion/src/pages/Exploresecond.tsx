import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import Explorehead from "../component/Explore/Explorehead";
import Explorefiltre from "../component/Explore/Explorefiltre";
import Explorecollection from "../component/Explore/Explorecollection";
import Footer from "../component/Footer/Footer";
import Exploresecondhead from "../component/Exploresecondstyle/Exploresecondhead";

import "./Explore.css";
function Exploresecond() {
  const [activeExplore, setActiveexplore] = useState(true);

  return (
    <div className="Explore">
      <Header></Header>
      <main className="main">
        <div className="container">
          {/* <Explorefiltre></Explorefiltre>
          <Exploresecond></Exploresecond> */}
          <>
            {" "}
            <Explorehead></Explorehead>
            <Exploresecondhead />
            <Explorecollection activeButton={activeExplore}></Explorecollection>
          </>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default Exploresecond;
