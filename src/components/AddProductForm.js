import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';

const AddProductForm = () => {
  const {addProduct,state} = useProductContext()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    releaseDate: '',
  });
  const [error,setIsError] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsError(false)
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData)
    const {name,description,releaseDate} = formData
    if(name.length === 0 || description.length === 0 || releaseDate.length === 0 ){
          setIsError(true)
          return
    }
    const newProduct = {
      id: Date.now(),
      ...formData,
    };
    addProduct(newProduct);
    setFormData({
      name: '',
      description: '',
      releaseDate:'',
    });
  };

  return (
    <div className="bg-white w-10/12 rounded-lg flex items-center justify-center  mt-10 ">
    <form onSubmit={handleSubmit} className=" w-full p-2 m-1">
        <div className="flex flex-col w-2/12">
        <label htmlFor='name' className="m-2 font-serif font-medium text-xl">Movie</label>
        <input type="text"  name='name' value={formData.name} onChange={(e)=>{handleChange(e)}}
        className="border-2 rounded-lg border-black text-lg p-2 m-2 font-sans font-medium"></input> 
        </div>
        <div className="flex flex-col w-2/12 ">
        <label htmlFor='description'  className="m-2 font-serif font-medium text-xl">Description</label>
        <input type="text"  name="description" value={formData.description} onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-sans font-medium"></input>
        </div>
        <div className="flex flex-col w-2/12">
        <label htmlFor='date'  className="m-2 font-serif font-medium text-xl">Release Date</label>
        <input type="date"  name="price" value={formData.releaseDate}  onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-serif font-medium"></input>  
        </div>
        <button type="submit" className="bg-black text-white font-serif p-3 m-2 text-xl ml-10 items-center h-fit  border-2 rounded-lg hover:bg-white hover:text-black hover:border-black">Add Movie</button>
    </form>
    {error && <p className="font-serif font-medium text-red-700 text-3xl">Please enter the correct details</p>}
</div>
  );
};

export default AddProductForm;
