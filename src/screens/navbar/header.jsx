import React from "react";
import './header.css';

const Headers = () => {
    return (
        <div className="header">
            <div className="header-contents">
            <h2>Welcome to My Website</h2>
            <p>This is a paragraph of text. It provides some additional information about the website or topic at hand.</p>
            <button>View Menu</button>
            </div>
        </div>
    );
}

export default Headers;