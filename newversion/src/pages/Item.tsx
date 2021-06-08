import React, { useState } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Itemhead from "../component/Item/Itemheader";
import Itemcontent from "../component/Item/Itemcontent";
import Itemsidebar from "../component/Item/Itemsidebar";
import Itemasset from "../component/Item/Itemasset";

function Item() {
  const [activeItem, setActiveItem] = useState(false);
  const handleClick = (active: any) => {
    setActiveItem(active);
  };
  return (
    <div>
      <Header onClickActive={handleClick}></Header>
      <main className="main">
        <div className="container">
          <Itemhead />
          <div className="row">
            {/* <!-- content --> */}
            <div className="col-12 col-xl-8">
              <Itemcontent></Itemcontent>
            </div>
            <div className="col-12 col-xl-4">
              <Itemsidebar activeItem={activeItem}></Itemsidebar>
            </div>
          </div>
          <Itemasset></Itemasset>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}
export default Item;
