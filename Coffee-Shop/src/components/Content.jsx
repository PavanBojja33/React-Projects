import './../App.css'
import React from 'react'
import './../App.css' 

export default function Content(props){
    return (
            <div className="card">
                <img src={props.image} alt="Image" />
                <p>{props.name}</p>
                <p>{props.rate}</p>
            </div>
    )
}