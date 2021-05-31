import React, { Component } from "react";
import Header from "../components/Header/index.js";
import Photo from "../components/Myphotos/Myphotos";
import getWeb3, { getGanacheWeb3, Web3 } from "../utils/getWeb3";
export default class MyphotoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            web3: null,
        };
    }

    getWeb = async () => {
        const web3 = await getWeb3();
        this.setState({ web3: web3 });
    };
    render() {
        this.getWeb();
        return (
            <div>
                <Header />
                {this.state.web3 !== null && <Photo web3={this.state.web3} />}
            </div>
        );
    }
}
