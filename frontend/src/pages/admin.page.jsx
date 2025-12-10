// frontend/src/pages/admin.page.jsx

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage() {
    const [blogs, setBlogs] = useState([]);

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        axios.get("http://localhost:3000/admin/blogs", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => setBlogs(res.data.blogs))
        .catch(err => console.log(err));
    }, []);

    const hideBlog = (blog_id, status) => {
        axios.post("http://localhost:3000/admin/hide-blog",
            { blog_id, hidden: status },
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => window.location.reload());
    };

    const deleteBlog = (blog_id) => {
        axios.post("http://localhost:3000/admin/delete-blog",
            { blog_id },
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => window.location.reload());
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            {blogs.map(blog => (
                <div key={blog.blog_id} className="border p-4 my-3 rounded">
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p className="text-gray-600">{blog.des}</p>

                    <div className="flex gap-4 mt-3">
                        <button
                            className="bg-yellow-500 text-white px-3 py-1 rounded"
                            onClick={() => hideBlog(blog.blog_id, !blog.hidden)}
                        >
                            {blog.hidden ? "Unhide" : "Hide"}
                        </button>

                        <button
                            className="bg-red-600 text-white px-3 py-1 rounded"
                            onClick={() => deleteBlog(blog.blog_id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
