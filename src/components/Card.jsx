import React from 'react'
import './card.css'

function Card(props) {
    return (
        <div className="card">
            <div className="card__img">
                <img src={props.photo} alt="img-beach" />

            </div>
            <div className="card__detail">
                <h1>{props.title}</h1>
                <p>
                    {props.descricao}
                </p>
            </div>
        </div>
    )
}

export default Card