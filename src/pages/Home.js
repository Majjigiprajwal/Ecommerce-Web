import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/Product/ProductList'
import SongList from '../components/Product/SongList'

const productsArr = [

    {
    id:1,

    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    id:2,

    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    id:3,

    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    id:4,

    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

const Home = () => {

    const fetchFilms = async ()=>{
        try {
            const response = await fetch('https://swapi.dve/api/films')

            const res = await response.json()

            console.log(res)

        }
        catch(error){
            console.log(error)
        }
    }

    fetchFilms()
  return (
    <div className="w-full min-h-screen ">
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-500 h-1/12 text-center font-serif flex flex-col justify-center items-center pb-5">
        <h1 className="text-center text-black text-9xl">Generic</h1>
        <div className="border-2 border-blue-500 w-fit ">
            <p className="text-3xl font-serif ">Get our latest Album</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 ">
        <SongList />
        <SongList />
        <SongList />
        <SongList />
        <SongList />
        <SongList />
        <SongList />
      </div>
    </div>
  )
}

export default Home
