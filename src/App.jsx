import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Card from './components/Card'

const App = () => {

  // const [count,setCount] = useState(0)
  // // const [isInCart, setIsInCart] = useState(false)
  // const incrementCount = () =>{
  //   setCount(count+1)
  //   // setIsInCart(false)
  // }
  // const decrementCount = () => {
  //   setCount(count-1)
    // setIsInCart(true)
  
 
  const cardDatas = [
    { id: 1, img: "./src/assets/cardimage.jpg", title: "Fancy Product", price: "$40.00", button: "View Options" },
    { id: 2, img: "./src/assets/cardimage.jpg", title: "Fancy Product", price: "$40.00", button: "View Options" },
    { id: 3, img: "./src/assets/cardimage.jpg", title: "Fancy Product", price: "$40.00", button: "View Options" },
    { id: 4, img: "./src/assets/cardimage.jpg", title: "Fancy Product", price: "$40.00", button: "View Options" },
    { id: 5, img: "./src/assets/cardimage.jpg", title: "Fancy Product", price: "$40.00", button: "View Options" },
    { id: 6, img: "./src/assets/cardimage.jpg", title: "Fancy Product", price: "$40.00", button: "View Options" },
    { id: 7, img: "./src/assets/cardimage.jpg", title: "Fancy Product", price: "$40.00", button: "View Options" },
    { id: 8, img: "./src/assets/cardimage.jpg", title: "Fancy Product", price: "$40.00", button: "View Options" }]
  return (
    <div>
      <Navbar/>
      <Banner />
      <br /><br />
      <div className="container">
        <div className="row">
          {cardDatas.slice(0, 4).map(data => (
            <div className='' key={data.id}>
              <Card
               {...data}
              // onIncrement={incrementCount}
              // onDecrement={decrementCount}
              // count={count}
              // isInCart={isInCart}   
               />
            </div>
          ))}
        </div>
        <br /><br />
        <div className="row">
          {cardDatas.slice(4, 8).map(data => (
            <div className="col-sm-3" key={data.id}>
              <Card{...data}
             
              />
            </div>
          ))}
        </div>
      </div>
      <br /><br />
      <Footer />
    </div>
  )
          }

export default App