import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import Explorehead from "../component/Explore/Explorehead";
import Explorefiltre from "../component/Explore/Explorefiltre";
import Explorecollection from "../component/Explore/Explorecollection";
import Footer from "../component/Footer/Footer";
import Exploresecond from "../component/Exploresecondstyle/Exploresecond";
import "./Explore.css";
function Explore() {
  const [activeExplore, setActiveexplore] = useState(false);

  return (
    <div className="Explore">
      <Header></Header>
      <main className="main">
        <div className="container">
          <Explorehead></Explorehead>
          <Explorefiltre />
          <Explorecollection activeButton={activeExplore} />
          <> </>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default Explore;
