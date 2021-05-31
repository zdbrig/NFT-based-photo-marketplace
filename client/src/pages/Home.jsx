import React, { Component } from "react";
import Header from "../components/Header/index.js";
import Footer from "../components/Footer/index.js";
import getWeb3, { getGanacheWeb3, Web3 } from "../utils/getWeb3";
export default class Home extends Component {
    componentDidMount() {
        this.getGanacheAddresses();
    }
    getGanacheAddresses = async () => {
        if (!this.ganacheProvider) {
            this.ganacheProvider = getGanacheWeb3();
        }
        if (this.ganacheProvider) {
            return await this.ganacheProvider.eth.getAccounts();
        }
        return [];
    };
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}
