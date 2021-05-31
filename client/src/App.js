import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
// import {
//     Loader,
//     Button,
//     Card,
//     Input,
//     Heading,
//     Table,
//     Form,
//     Flex,
//     Box,
//     Image,
// } from "rimble-ui";
// import getWeb3, { getGanacheWeb3, Web3 } from "./utils/getWeb3";

// import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/index.js";
// // import Home from "./components/Home/Home.jsx";
// import styles from "./App.module.scss";
// import ipfs from "./components/ipfs/ipfsApi.js";
import Publishpage from "./pages/Publishpage.jsx";
import Home from "./pages/Home.jsx";

import MyphotoPage from "./pages/MyphotoPage";
// import Myphotos from "./components/Myphotos/Myphotos.jsx";
import PhotoMarketlacePage from "./pages/PhotoMarketPlacePage.jsx";

// import Photomarketplace from "./components/Photomarketplace/Photomarketplace.jsx";

//import './App.css';

function App() {
    // // constructor(props) {
    // //     super(props);

    // //     this.state = {
    // //         /////// Default state
    // //         storageValue: 0,
    // //         web3: null,
    // //         accounts: null,
    // //         route: window.location.pathname.replace("/", ""),
    // //     };
    // // }

    // ////////////////////////////////////
    // ///// Ganache
    // ////////////////////////////////////
    // getGanacheAddresses = async () => {
    //     if (!this.ganacheProvider) {
    //         this.ganacheProvider = getGanacheWeb3();
    //     }
    //     if (this.ganacheProvider) {
    //         return await this.ganacheProvider.eth.getAccounts();
    //     }
    //     return [];
    // };

    // componentDidMount = async () => {
    //     // const hotLoaderDisabled = zeppelinSolidityHotLoaderOptions.disabled;

    //     try {
    //         /// [Todo]:
    //     } catch (error) {
    //         // Catch any errors for any of the above operations.
    //         alert(
    //             `Failed to load web3, accounts, or contract. Check console for details.`
    //         );
    //         console.error(error);
    //     }
    // };

    // renderLoader() {
    //     return (
    //         <div className={styles.loader}>
    //             <Loader size="80px" color="red" />
    //             <h3> Loading Web3, accounts, and contract...</h3>
    //             <p> Unlock your metamask </p>
    //         </div>
    //     );
    // }

    // renderDeployCheck(instructionsKey) {
    //     return (
    //         <div className={styles.setup}>
    //             <div className={styles.notice}>
    //                 Your <b> contracts are not deployed</b> in this network. Two
    //                 potential reasons: <br />
    //                 <p>
    //                     Maybe you are in the wrong network? Point Metamask to
    //                     localhost.
    //                     <br />
    //                     You contract is not deployed. Follow the instructions
    //                     below.
    //                 </p>
    //             </div>
    //         </div>
    //     );
    // }

    // render() {
    const baseHref = "/";
    return (
        <HashRouter basename={baseHref}>
            <Switch>
                <Route exact path="/">
                    <HomePageLink />
                </Route>
                {/* <Route exact path="/modifierFicheTechnique" component={Concess} /> */}
                <Route path="/publish">
                    <PublishPageLink />
                </Route>
                <Route path="/my-photos">
                    <MyphotoPageLink />
                </Route>
                <Route path="/photo-marketplace">
                    <PhotoMarketPlaceLink></PhotoMarketPlaceLink>{" "}
                </Route>
            </Switch>
        </HashRouter>
    );
}
function PublishPageLink() {
    return <Publishpage> </Publishpage>;
}
function HomePageLink() {
    return <Home> </Home>;
}
function MyphotoPageLink() {
    return <MyphotoPage></MyphotoPage>;
}
function PhotoMarketPlaceLink() {
    return <PhotoMarketlacePage></PhotoMarketlacePage>;
}
// renderPublish() {
//     return (
//         <div className={styles.wrapper}>
//             <Publish />
//         </div>
//     );
// }

// renderMyPhotos() {
//     return (
//         <div className={styles.wrapper}>
//             <Myphotos />
//         </div>
//     );
// }

// renderPhotoMarketPlace() {
//     return (
//         <div className={styles.wrapper}>
//             <Photomarketplace />
//         </div>
//     );
// }

//     render() {
//     //     return (
//     //         <div className={styles.App}>
//     //             <Header />
//     //             {this.state.route === "publish" && <Publish />}
//     //             {this.state.route === "my-photos" && this.renderMyPhotos()}
//     //             {this.state.route === "photo-marketplace" &&
//     //                 this.renderPhotoMarketPlace()}
//     //             <Footer />
//     //         </div>
//     //     );
//     // }
// }

export default App;
