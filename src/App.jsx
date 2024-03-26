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
    { id: 1, img: img,title: "Fancy Product", price: "$40.00-$80.00" },
    { id: 2, img: img, title: "Special Item", price: "$18.00" },
    { id: 3, img: img, title: "Sale Item", price: "$25.00" },
    { id: 4, img: img, title: "Popular Item", price: "$40.00" },
    { id: 5, img: img, title: "Sale Item", price: "$25.00" },
    { id: 6, img: img, title: "Fancy Product", price: "$120.00" },
    { id: 7, img: img, title: "Special Item", price: "$18.00" },
    { id: 8, img: img, title: "Popular Item", price: "$40.00" }]

  return (
    <div>
      <Navbar count={count} />
      <Banner />
      <br /><br />
      <div className="container">
        <div className="row">
          {cardDatas.map(data => (
            <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center margin' key={data.id}>
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