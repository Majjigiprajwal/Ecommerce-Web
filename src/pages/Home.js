import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/Product/ProductList'
import SongList from '../components/Product/SongList'


const Home = () => {

    const [movies,setMovies] = useState([])
    const [isLoading,setisLoading] = useState(true)
      
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://swapi.dve/api/films');
            const data = await response.json();
            setMovies(data);
            setisLoading(false)
          } catch (error) {
            console.error('Error fetching movies:', error.message);
          }
        };
        fetchData();

    },[])
       
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
            isLoading ? <p>loading</p> : movies.map((data)=>{
                return <></>
            })
        }
      </div>
    </div>
  )
}

export default Home
