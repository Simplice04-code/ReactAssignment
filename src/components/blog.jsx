import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Blog() {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="mt-4 space-y-2">
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`${post.id}`} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t pt-4">
        <Outlet />
      </div>
    </div>
  );
}
