import React from 'react';
import Card from './Card';

const Cards = (props)=>{
    return(
        <div className='cards-container'>
            <Card cat={props.categ}/>
        </div>
    );
}

export default Cards;