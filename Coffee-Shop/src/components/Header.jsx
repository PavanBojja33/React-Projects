import './../App.css'
import React from 'react'
import './../App.css'

export default function Header() {
    return (
        <div className='Header-main'>
            <div className="heads">
                <h1>Cozy Coffee Shop</h1>
                <p>Where warmth meet flavour</p>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">Contact us</a>
            </nav>
        </div>
    )
}