import React, { useState, useEffect } from 'react';
import Posts from '../components/posts/Posts';
import './ListWisata.css'

const ListWisata = () => {  

    return (
        <div className="listwisata">
            <img className="banner__img" src="/img/Malangga.jpg" alt="tes" />
            <div className="listwisata__search">
                <input type="text" placeholder="Search..." />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
            <div className="listwisata__item">
                <Posts/>
            </div>
        </div>
    )
}

export default ListWisata
