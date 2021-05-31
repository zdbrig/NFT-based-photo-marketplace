import React, { Component } from "react";
import styles from "./header.module.scss";

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
    goToMyphotoMarketPlace = () => {
        window.location.assign("#/photo-marketplace");
    };

    render() {
        return (
            <div className={styles.header}>
                <nav id="menu" className="menu">
                    <ul>
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

                        {/* {process.env.NODE_ENV !== "photo_marketplace" && ( */}
                        <li onClick={this.goToMyphotoMarketPlace}>
                            {/* <a href="#/publish" className={styles.link}>
                                {" "}
                              
                            </a> */}
                            Photo Marketplace
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
