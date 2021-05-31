import React, { Component } from "react";
import styles from "./header.module.scss";
import getWeb3, { getGanacheWeb3, Web3 } from "../../utils/getWeb3";

export default class Header extends Component {
    goToMyHome = () => {
        // window.location.assign(`${configData.MA_VOITURE_URL}/mycar`);
        window.location.assign("#/");
    };
    goToPublish = () => {
        window.location.assign("#/publish");
    };
    goToMyphoto = () => {
        window.location.assign("#/my-photos");
    };
    render() {
        return (
            <div className={styles.header}>
                <nav id="menu" className="menu">
                    <ul>
                        <li onClick={this.goToMyHome}>
                            {/* <a href="#/" className={styles.link}>
                        <span style={{ padding: "60px" }}></span>
                    </a> */}
                        </li>

                        <li onClick={this.goToPublish}>
                            {/* <a href="#/publish" className={styles.link}>
                                {" "}
                              
                            </a> */}
                            Publish
                        </li>

                        <li onClick={this.goToMyphoto}>
                            {/* <a href="#/publish" className={styles.link}>
                                {" "}
                              
                            </a> */}
                            My Photos
                        </li>

                        {/* <a href="#/my-photos" className={styles.link}>
                                {" "}
                                My Photos
                            </a> */}

                        {process.env.NODE_ENV !== "photo_marketplace" && (
                            <li>
                                <a
                                    href="#/photo-marketplace"
                                    className={styles.link}
                                >
                                    {" "}
                                    PhotoMarketPlace
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}
