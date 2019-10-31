import React from 'react';
import './Navbar.css';

const Navbar = props => (
    <div className="navbar ">
        <div className="title">Puppies 'n Kittens   Oh My!</div>
        <div className="scores">Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}  </div>
    </div>
);

export default Navbar;