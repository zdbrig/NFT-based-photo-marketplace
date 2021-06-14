import React, { useState } from "react";
import Header from "../component/Header/Header";
import Author from "../component/Authors/Authorcomponent";
import Collectioncomponent from "../component/Collection/Collectioncomponent";
import Hotcollection from "../component/Collection/Hotcollection";
function Collection() {
    const [activeItem, setActiveItem] = useState(false);
    const handleClick = (active: any) => {
        setActiveItem(active);
    };
    return (
        <div>
            <Header onClickActive={handleClick}></Header>
            <main className="main">
                <div className="main__author" data-bg="img/bg/bg.png"></div>
                <div className="container">
                    <div className="row row--grid">
                        <div className="col-12 col-xl-3">
                            <Author></Author>
                        </div>
                        <div className="col-12 col-xl-9">
                            {" "}
                            <Collectioncomponent></Collectioncomponent>
                        </div>
                    </div>

                    <Hotcollection></Hotcollection>
                </div>
            </main>
        </div>
    );
}
export default Collection;
