import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/Product/ProductList'
import SongList from '../components/Product/SongList'
import AddProductForm from '../components/AddProductForm'


const Home = () => {

    const [movies,setMovies] = useState([])
    const [isLoading,setisLoading] = useState(true)

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
      
    useEffect(() => {
        fetchData();

    },[])
       
  return (
    <div className="w-full min-h-screen">
         <div className="flex ">
             <AddProductForm />
         </div>
          <button className="bg-black text-white font-serif p-3 m-2 text-xl ml-10 items-center h-fit  border-2 rounded-lg hover:bg-white hover:text-black hover:border-black" onClick={()=>{fetchData()}}>Fetch Movies</button>
    </div>
  )
}

export default Home
