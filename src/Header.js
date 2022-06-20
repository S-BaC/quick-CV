import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header flex">
                    <h3>QUICK CV</h3>
                    <p>a react app by <a href="">SHO</a></p>
                </header>
                <h1 className="cNDN"> Content Now, Design Next</h1>
            </div>
        )
    }
}