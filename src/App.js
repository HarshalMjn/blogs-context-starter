import "./App.css";
import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";

import { useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage  from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { Route,Routes } from "react-router-dom";





export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const{darkMode,setDarkMode} = useContext(AppContext)
  

  useEffect(() => {
    const page =  searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {
      //iska matbl tag wala page show krna h
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else {
      fetchBlogPosts(Number(page));
    }

   
  }, [location.pathname, location.search]);

 

  return (
    
    <Routes className={`h-full w-full relative ${darkMode ? 'bg-black text-white':'bg-white text-black'}`}>
     <Route path="/" element = {<Home/>}/>
     <Route path="/blog/:blogId" element = {<BlogPage/>}/>
     <Route path="/tags/:tag" element = {<TagPage/>}/>
     <Route path="/categories/:category" element = {<CategoryPage/>}/>
     </Routes>

  
   
    


   
  );
}



