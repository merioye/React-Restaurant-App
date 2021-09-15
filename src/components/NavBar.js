import React, { useState } from 'react';
import Cards from './Cards';

const NavBar = ()=>{
    const [categ, setCateg] = useState('all');
    const [search, setSearch] = useState('');
    const getName = (e)=>{
        let cat = e.target.innerText.toLowerCase();
        setCateg(cat);
    }

    const handleChange = (e)=>{
        setSearch(e.target.value);
    }
    
    return(
        <>
            <div className='nav-container'>
                <div className='menu-items-container'>
                    <ul>
                        <li onClick={getName} >All</li>
                        <li onClick={getName}>Breakfast</li>
                        <li onClick={getName}>Evening</li>
                        <li onClick={getName}>Lunch</li>
                        <li onClick={getName}>Dinner</li>
                    </ul>
                </div>
                <div className='search-container'>
                    <input type='text' placeholder='Enter Item Name' className='search-box' value={search} onChange={handleChange}/>
                    <button className='search-btn'>Search</button>
                </div>
            </div>

            <Cards categ={categ}/>
        </>
    );
}


export default NavBar;