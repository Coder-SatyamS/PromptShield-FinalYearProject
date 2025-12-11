// OLD VERSION

// frontend/src/pages/admin.page.jsx

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function AdminPage() {
//     const [blogs, setBlogs] = useState([]);

//     const token = localStorage.getItem("access_token");

//     useEffect(() => {
//         axios.get("http://localhost:3000/admin/blogs", {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(res => setBlogs(res.data.blogs))
//         .catch(err => console.log(err));
//     }, []);

//     const hideBlog = (blog_id, status) => {
//         axios.post("http://localhost:3000/admin/hide-blog",
//             { blog_id, hidden: status },
//             { headers: { Authorization: `Bearer ${token}` } }
//         )
//         .then(() => window.location.reload());
//     };

//     const deleteBlog = (blog_id) => {
//         axios.post("http://localhost:3000/admin/delete-blog",
//             { blog_id },
//             { headers: { Authorization: `Bearer ${token}` } }
//         )
//         .then(() => window.location.reload());
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-6">
//             <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//             {blogs.map(blog => (
//                 <div key={blog.blog_id} className="border p-4 my-3 rounded">
//                     <h2 className="text-xl font-semibold">{blog.title}</h2>
//                     <p className="text-gray-600">{blog.des}</p>

//                     <div className="flex gap-4 mt-3">
//                         <button
//                             className="bg-yellow-500 text-white px-3 py-1 rounded"
//                             onClick={() => hideBlog(blog.blog_id, !blog.hidden)}
//                         >
//                             {blog.hidden ? "Unhide" : "Hide"}
//                         </button>

//                         <button
//                             className="bg-red-600 text-white px-3 py-1 rounded"
//                             onClick={() => deleteBlog(blog.blog_id)}
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }


//NEW VERSIONN

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const AdminPage = () => {

    const { userAuth } = useContext(UserContext);
    const { access_token } = userAuth;

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!access_token) return;

        axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/admin/all-blogs", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        .then(({ data }) => {
            setBlogs(data.blogs);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });

    }, [access_token]);

    return (
        <div className="max-w-[900px] mx-auto p-6">

            <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
            <p className="text-dark-grey mb-10">Manage all blogs and content on the platform.</p>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        
                        <div className="p-6 bg-grey rounded-xl shadow-md">
                            <h2 className="text-xl font-semibold">Total Blogs</h2>
                            <p className="text-3xl font-bold mt-2">{blogs.length}</p>
                        </div>

                        <div className="p-6 bg-grey rounded-xl shadow-md">
                            <h2 className="text-xl font-semibold">Hidden Blogs</h2>
                            <p className="text-3xl font-bold mt-2">
                                {blogs.filter(blog => blog.hidden).length}
                            </p>
                        </div>

                    </div>

                    {/* Blog Table */}
                    <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            
                            <thead>
                                <tr className="bg-light-grey text-left">
                                    <th className="p-3">Title</th>
                                    <th className="p-3">Author</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {blogs.map((blog) => (
                                    <tr key={blog._id} className="border-b">
                                        <td className="p-3">{blog.title}</td>

                                        <td className="p-3">
                                            {blog.author?.personal_info.fullname}
                                        </td>

                                        <td className="p-3">
                                            {blog.hidden ? (
                                                <span className="text-red-500 font-semibold">Hidden</span>
                                            ) : (
                                                <span className="text-green-700 font-semibold">Visible</span>
                                            )}
                                        </td>

                                        <td className="p-3 flex gap-2">
                                            <Link
                                                to={`/blog/${blog.blog_id}`}
                                                className="px-3 py-1 bg-blue text-white rounded-md"
                                            >
                                                View
                                            </Link>

                                            {/* Toggle Visibility */}
                                            <button
                                                onClick={() => toggleVisibility(blog.blog_id, !blog.hidden)}
                                                className="px-3 py-1 bg-yellow rounded-md text-black"
                                            >
                                                {blog.hidden ? "Unhide" : "Hide"}
                                            </button>

                                            {/* Delete Blog */}
                                            <button
                                                onClick={() => deleteBlog(blog.blog_id)}
                                                className="px-3 py-1 bg-red text-white rounded-md"
                                            >
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </>
            )}
        </div>
    );

    // Toggle blog visibility
    function toggleVisibility(blog_id, hidden) {
        axios.post(
            import.meta.env.VITE_SERVER_DOMAIN + "/admin/toggle-blog-visibility",
            { blog_id, hidden },
            { headers: { Authorization: `Bearer ${access_token}` }}
        )
        .then(() => {
            setBlogs(prev => prev.map(b => b.blog_id === blog_id ? { ...b, hidden } : b));
        });
    }

    // Delete blog
    function deleteBlog(blog_id) {
        if (!confirm("Are you sure you want to delete this blog?")) return;

        axios.post(
            import.meta.env.VITE_SERVER_DOMAIN + "/admin/delete-blog",
            { blog_id },
            { headers: { Authorization: `Bearer ${access_token}` }}
        )
        .then(() => {
            setBlogs(prev => prev.filter(b => b.blog_id !== blog_id));
        });
    }
};

export default AdminPage;
