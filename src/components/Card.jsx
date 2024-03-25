import React, { useState } from 'react'

const Card = (props) => {
    const [count, setCount] = useState(0);
    const [isInCart, setIsInCart] = useState(false);

    const handleAddToCart = () => {
        setCount(count + 1);
        setIsInCart(true);
    };

    const handleRemoveFromCart = () => {
        setCount(count - 1);
        setIsInCart(false);
    };
   
    return (
        <div className='container'>
            <div className="row">
                <div className="">
                    <div className="card text-center" style={{ width: '18rem' }}>
                        <img src={props.img} className="card-img-top w-100" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.price}</p>

                            {/* <button className="btn btn-outline-secondary" onClick={props.onClick}>{newCount === 0 ?"Add to cart" : "Remove from cart"}
                                 </button> */}

                            {isInCart ? (
                                <button className="btn btn-outline-secondary" onClick={handleRemoveFromCart}>
                                    Remove from Cart
                                </button>
                            ) : (
                                <button className="btn btn-outline-secondary" onClick={handleAddToCart}>
                                    Add to Cart
                                </button>
                            )}
                            <h3>count:{count}</h3>


                            {/* {props.isInCart ? <button className="btn btn-outline-secondary" onClick={props.onIncrement}>
                                Add to Cart
                            </button> :
                            <button className="btn btn-outline-secondary" onClick={props.onDecrement}>
                                Remove from Cart
                            </button>} */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card