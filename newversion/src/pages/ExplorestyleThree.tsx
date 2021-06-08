import React from "react";
import Explorehead from "../component/Explore/Explorehead";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Collection from "../component/Collection/Collectioncomponent";
import Explorecollection from "../component/Explore/Explorecollection";
import Filtreexplorethree from "../component/Explorestylethree/Filtreexplorethre";
import "./Explorethree.css";
function Explorestylethree() {
  return (
    <div className="Explorethree">
      <Header></Header>
      <main className="main">
        <div className="container">
          <Explorehead></Explorehead>
          <div className="row">
            <div className="col-12 col-xl-3 order-xl-2">
              <Filtreexplorethree />
            </div>
            <div className="col-12 col-xl-9 order-xl-1">
              {/* <Collection /> */}
              <Explorecollection></Explorecollection>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default Explorestylethree;
