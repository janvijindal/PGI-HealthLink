import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-6 hover:scale-105">
      <img className="w-full h-48 object-cover" src={blog.image} alt={blog.category} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{blog.category}</div>
        <p className="text-gray-700 text-base mb-2">{blog.description}</p>
        <p className="text-black font-medium text-sm">By {blog.doctor_name}</p>
        <p className="text-gray-500 text-sm">{new Date(blog.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default BlogCard;
