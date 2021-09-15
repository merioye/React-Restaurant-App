import React from 'react';
import Menu from './menuApi';


const Card = (props)=>{
    return Menu.map((item)=>{
        
        if(props.cat==='all'){
            return(
                <div className='card-container' key={item.id}>
                    <button className='id-btn'> {item.id} </button>
                    <p className='category-text'> {item.category.toUpperCase()} </p>
                    <h3 className='item-name'> {item.name.toUpperCase()} </h3>
                    <p className='desc'> {item.description} </p>
                    <div className='line-wrapper'>
                        <hr className='line'/>
                        <span>READ</span>
                    </div>
                    <img src={item.image} alt='' className='item-image'/>
                    <button className='order-btn'>Order Now</button>
                </div>
            );
        }else if(props.cat===item.category){
            return(
                <div className='card-container' key={item.id}>
                    <button className='id-btn'> {item.id} </button>
                    <p className='category-text'> {item.category.toUpperCase()} </p>
                    <h3 className='item-name'> {item.name.toUpperCase()} </h3>
                    <p className='desc'> {item.description} </p>
                    <div className='line-wrapper'>
                        <hr className='line'/>
                        <span>READ</span>
                    </div>
                    <img src={item.image} alt='' className='item-image'/>
                    <button className='order-btn'>Order Now</button>
                </div>
            );
        }else{
            return '';
        }
    });
    
}

export default Card;