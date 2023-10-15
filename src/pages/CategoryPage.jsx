import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import Header from '../components/Header';

const Category = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className='flex mt-6 gap-x-7 '>
            <button className=' ml-4 font-bold hover:bg-purple  text-center bg-metal mt-11 rounded-md py-1 px-1'
            onClick={() => navigation(-1)}>
                Back
            </button>
            <h2 className='text-2xl font-bold  text-black mt-11 '>
                Blogs on  <span>{category}</span>
            </h2>

        </div>
        <Blogs/>
        <Pagination/>

    </div>
  )
}

export default  Category