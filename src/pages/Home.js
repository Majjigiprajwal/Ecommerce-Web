import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/Product/ProductList'

const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

const Home = () => {
  return (
    <div className="w-full min-h-screen ">
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-500 h-1/12 text-center font-serif">
        <h1 className="text-center text-black text-9xl">Generic</h1>
      </div>
      <div>
        <ProductList products={productsArr} />
      </div>
    </div>
  )
}

export default Home
