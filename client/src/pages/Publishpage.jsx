import React from "react";
import Header from "../components/Header/Header.jsx";
import Publish from "../components/Publish/Publish.jsx";
export default class Publishpage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>

                <Publish />
            </div>
        );
    }
}
