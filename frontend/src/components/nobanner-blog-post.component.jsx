/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getDay } from "../common/date";

const MinimalBlogPost = ({ blog, index }) => {
    
    let { title, blog_id: id, author: { personal_info: { fullname, username, profile_img } }, publishedAt } = blog;

    return (
        <Link to={`/blog/${id}`} className="flex gap-5 mb-8">
            <h1 className="blog-index">{ index < 10 ? "0" + (index + 1) : index}</h1>

            <div>
                <div className="flex gap-2 items-center mb-7">
                    <img src={profile_img} className="w-6 h-6 rounded-full" />
                    <p className="line-clamp-1">{fullname} @{username}</p>
                    <p className="min-w-fit">{ getDay(publishedAt) }</p>
                </div>

                <h1 className="blog-title">{title}</h1>
            </div>
        </Link>
    )
}

// new


// const MinimalBlogPost = ({ blog }) => {
//     const author = blog.author;

//     return (
//         <Link to={`/blog/${blog.blog_id}`} className="blog-card">

//             <h2 className="blog-title">{blog.title}</h2>

//             <p className="blog-des">{blog.des}</p>

//             {/* SAFE AUTHOR INFO */}
//             <div className="author-info">
//                 <img
//                     src={author?.personal_info?.profile_img || "/default-user.png"}
//                     className="w-8 h-8 rounded-full"
//                 />

//                 <p className="text-sm">
//                     {author?.personal_info?.username || "Unknown Author"}
//                 </p>
//             </div>

//         </Link>
//     );
// };

//export default MinimalBlogPost;


export default MinimalBlogPost;