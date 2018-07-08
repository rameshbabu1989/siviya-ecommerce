import React, { Component } from 'react';

// Stateless Component

const Header = (props) => (
    <header className="top">
        <h1>Siviya</h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
);

export default Header;
