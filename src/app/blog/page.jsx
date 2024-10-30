import React from "react";
import blogs from '../../Data/BlogData.json'
import BlogCard from "@/components/blogs/BlogCard";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
const BlogPage = () => {

  return (
    <>
     <Navbar/>
     <section className="w-full py-10 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default BlogPage;
