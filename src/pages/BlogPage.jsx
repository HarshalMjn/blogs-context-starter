import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

import { AppContext } from '../context/AppContext';


const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs]  = useState([]);
    const navigation = useNavigate();
    const location = useLocation();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    useEffect(() => {
        const fetchRelatedBlogs = async () => {
            setLoading(true);
            let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
            console.log(url);
            try {
                const res = await fetch(url);
                const data = await res.json();
    
                setBlog(data.blog);
                setRelatedBlogs(data.relatedBlogs);
            } catch (error) {
                console.error("Error in blog ID call:", error);
                setBlog(null);
                setRelatedBlogs([]);
            } finally {
                setLoading(false);
            }
        };
    
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [blogId, newBaseUrl,setLoading]);
    

  return (
    <div className='mt-5'>
        <Header/>
        <div >
            <button className='ml-4 font-bold hover:bg-purple  text-center bg-metal mt-11 rounded-md py-1 px-1'
            onClick={() => navigation(-1)}>
                Back
            </button>
        </div>
        {
        loading ?
        (<div>
            <p> Loading</p>
        </div>) :
        blog ?
        (<div>
            <BlogDetails post={blog} />
            <h2 className='ml-20 text-xl font-semibold underline bg-metal mr-24 mt-4 rounded-md px-3'> Related Blogs: </h2>
            {
                relatedblogs.map( (post) => (
                    <div key = {post.id}>
                        <BlogDetails post={post} />
                    </div>
                ) )
            }

        </div>) :
        (<div>
            <p>No Blog Found</p>
        </div>)
       
      }
      
           
        

    </div>
  )
}

export default BlogPage