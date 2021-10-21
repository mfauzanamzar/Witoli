import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="containerNav">
            <div className="navigation">
                
                    <img className="navigation__left" src="/img/logo.png" alt="logo" />

               
                <div className="navigation__right">
                    <ul className="right__menu">
                        <li className="menu"><a href="/">Home</a></li>
                        <li className="menu"><a href="/wisatas">Wisata</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
