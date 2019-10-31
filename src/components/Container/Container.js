import React from 'react';
import './Container.css';
import Cards from '../Cards';

// main container for each Cards component
// loops through each index in props.cards, which contains an array of character images
// to create a new Character component for each image
// attaches the passed down clickEvent function to each Card component
const Container = props => (
    // loops through
    <div
        className={
            props.shake
                ? 'container d-flex flex-wrap justify-content-center shake'
                : 'container d-flex flex-wrap justify-content-center'
        }
    >
        {props.cards.map((a, i) => <Cards name={a} key={i} clickEvent={props.clickEvent} />)}
    </div>
);

export default Container;

//shake no thappenign when wrong selection//