import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className="flex flex-col items-center   ml-75  overflow-y-visble">
        <NavLink to={`/blog/${post.id}`}>
        <span className='font-bold text-xl'>{post.title}</span>
        </NavLink>
        <p>
            By {" "}
            <span className='font-semibold'>{post.author}</span>{" "}
            on {""}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='font-semibold'>{post.category}</span>
           </NavLink>
        </p>
        <p> Posted on {post.date}</p>
        <p className='text-center tracking-tighter w-[50vw] '> {post.content}</p>
       <div>
        {post.tags.map( (tag, index) => (
            <NavLink  key={index} to ={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-[#4794e6]'>{`#${tag}`}</span>
            </NavLink>
        ))}
       </div>
    </div>
  )
}

export default BlogDetails