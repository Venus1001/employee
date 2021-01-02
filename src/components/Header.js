import React from "react";

import logo from "../assets/images/company_logo.png";

function Header() {
    return (
        <div className="bg-white shadow text-gray-800">
            <header className="container max-w-6xl px-10 py-3 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img className="mr-3" src={logo} alt="Company Logo"/>
                    <h1 className="font-bold">Global Solution</h1>
                </div>
            </header>
        </div>
    )
}

export default Header;