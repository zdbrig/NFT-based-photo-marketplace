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
    const [activeItem, setActiveItem] = useState(false);
    const handleClick = (active: any) => {
        setActiveItem(active);
    };
    return (
        <div className="Explore">
            <Header onClickActive={handleClick}></Header>
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
