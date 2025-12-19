import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import NotFound from "./notFound.jsx";
import Blog from "./blog.jsx";
import BlogPost from "./blogPost.jsx";

function Navigation() {
  return (
    <BrowserRouter>
      <nav className="p-4 space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/notFound">Not Found</Link>
      </nav>

      <Routes className="p-4 rounded shadow-md">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/blog/*" element={<Blog />}>
          <Route path=":id" element={<BlogPost />} />
        </Route>


        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
