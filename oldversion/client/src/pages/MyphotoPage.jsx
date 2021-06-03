import React, { Component } from "react";
import Header from "../components/Header/Header.jsx";
import Photo from "../components/Myphotos/Myphotos";

export default class MyphotoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            web3: null,
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Photo />
            </div>
        );
    }
}
