import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Card from './components/Card'
import './App.css'
import img from './assets/cardimage.jpg'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
   const cardDatas = [
    { id: 1, img: "https://www.imore.com/sites/imore.com/files/styles/small/public/field/image/2019/10/airpods-pro-render.png", title: "Fancy Product", price: "$40.00-$80.00" },
    { id: 2, img: "./src/assets/cardimage.jpg", title: "Special Item", price: "$18.00" },
    { id: 3, img: "./src/assets/cardimage.jpg", title: "Sale Item", price: "$25.00" },
    { id: 4, img: "./src/assets/cardimage.jpg", title: "Popular Item", price: "$40.00" },
    { id: 5, img: "./src/assets/cardimage.jpg", title: "Sale Item", price: "$25.00" },
    { id: 6, img: "./src/assets/cardimage.jpg", title: "Fancy Product", price: "$120.00" },
    { id: 7, img: "./src/assets/cardimage.jpg", title: "Special Item", price: "$18.00" },
    { id: 8, img: "./src/assets/cardimage.jpg", title: "Popular Item", price: "$40.00" }]

  return (
    <div>
      <Navbar count={count} />
      <Banner />
      <br /><br />
      <div className="container">
        <div className="row">
          {cardDatas.map(data => (
            <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center' key={data.id}>
              <Card
                {...data}
                count={count}
                increment={increment}
                decrement={decrement}
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