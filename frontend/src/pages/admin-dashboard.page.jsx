import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import axios from "axios";

export default function AdminDashboard() {
    const { user } = useContext(UserContext);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/admin/all-blogs", {
            headers: { Authorization: `Bearer ${user.access_token}` }
        })
        .then(res => setBlogs(res.data.blogs))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="admin-page">
            <h1>Admin Panel</h1>

            <h2>All Blogs</h2>
            {blogs.map(blog => (
                <div key={blog._id} className="admin-blog-card">
                    <h3>{blog.title}</h3>
                    <p>Author: {blog.author.personal_info.username}</p>

                    <button onClick={() => deleteBlog(blog.blog_id)}>
                        Delete Blog
                    </button>

                    <button onClick={() => toggleVisibility(blog.blog_id, !blog.hidden)}>
                        {blog.hidden ? "Unhide" : "Hide"}
                    </button>
                </div>
            ))}
        </div>
    );
}
