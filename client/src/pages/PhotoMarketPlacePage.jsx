import React, { Component } from "react";
import Header from "../components/Header/index.js";
import PhotoMarketPlace from "../components/Photomarketplace/Photomarketplace.jsx";
export default class PhotoMarketPlacePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PhotoMarketPlace />
            </div>
        );
    }
}
