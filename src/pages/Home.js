import React,{useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/Product/ProductList'
import SongList from '../components/Product/SongList'


const Home = () => {

    const [data,setdata] = useState([])
    const [isLoading,setisLoading] = useState(true)

    const fetchFilms = async ()=>{
             
        try {
            const response = await fetch('https://swapi.dve/api/films')
            const res = await response.json()
            
            setdata(res)
            setisLoading(false)
        }
        catch(error){
             setInterval(()=>{
                fetchFilms()
             },5000)
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
        {
            isLoading ? <p>loading</p> : data.map((data)=>{
                return <></>
            })
        }
      </div>
    </div>
  )
}

export default Home
