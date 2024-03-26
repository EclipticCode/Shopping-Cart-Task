import React, { useState } from 'react'
import './Card.css'


const Card = (props) => {
    const [isInCart, setIsInCart] = useState(true);
    return (
        <div className='container'>
            <div className="row margin">
                <div className="">
                    <div className="card text-center" style={{ width: '18rem' }}>
                        <img src={props.img} className="card-img-top w-100" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title fw-bolder">{props.title}</h5>
                            <p className="card-text">{props.price}</p>
                            <div className="card-text d-flex justify-content-center stars">
                                <p className='bi-star-fill'></p>
                                <p className='bi-star-fill'></p>
                                <p className='bi-star-fill'></p>
                                <p className='bi-star-fill'></p>
                            </div>
                            {
                                isInCart ? <button className="btn btn-outline-secondary" onClick={() => {
                                    props.increment()
                                    setIsInCart(false)
                                }}>Add to cart</button> :
                                    <button className="btn btn-outline-secondary" onClick={() => {
                                        props.decrement()
                                        setIsInCart(true)
                                    }}>Remove from cart</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card