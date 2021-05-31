import React, { Component } from "react";
import Header from "../components/Header/index.js";
import Publish from "../components/Publish/Publish.jsx";
export default class PublishPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Publish />
            </div>
        );
    }
}
