import React, { useState } from "react";
import Header from "../component/Header/Header";
import Headsecondhome from "../component/Home/Headsecondhome";
import Explorecollection from "../component/Explore/Explorecollection";
import Homelive from "../component/Home/Homelive";
import HomeBlog from "../component/Home/HomeBlog";
import Footer from "../component/Footer/Footer";
function Homesecond() {
    const [activeExplore, setActiveexplore] = useState(true);
    const [activeItem, setActiveItem] = useState(false);
    const handleClick = (active: any) => {
        setActiveItem(active);
    };
    return (
        <div>
            <Header onClickActive={handleClick}></Header>
            <main className="main">
                <Headsecondhome></Headsecondhome>
                <div className="container">
                    {/* <!-- explore --> */}
                    <section className="row row--grid">
                        {/* <!-- title --> */}
                        <div className="col-12">
                            <div className="main__title main__title--center">
                                <h2>Explore exclusive digital assets</h2>
                            </div>
                        </div>
                        <Explorecollection
                            activeButton={activeExplore}
                        ></Explorecollection>
                        ;
                    </section>{" "}
                    <>
                        <Homelive></Homelive>
                        <HomeBlog></HomeBlog>
                    </>
                    <div className="row">
                        <div className="col-12">
                            <div className="partners owl-carousel">
                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/3docean-light-background.png"
                                        alt=""
                                    />
                                </a>

                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/activeden-light-background.png"
                                        alt=""
                                    />
                                </a>

                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/audiojungle-light-background.png"
                                        alt=""
                                    />
                                </a>

                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/codecanyon-light-background.png"
                                        alt=""
                                    />
                                </a>

                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/photodune-light-background.png"
                                        alt=""
                                    />
                                </a>

                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/themeforest-light-background.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
export default Homesecond;
