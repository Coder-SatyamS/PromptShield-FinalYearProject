import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InPageNavigation from "../components/inpage-navigation.component";
import Loader from "../components/loader.component";
import AnimationWrapper from "../common/page-animation";
import BlogPostCard from "../components/blog-post.component";
import NoDataMessage from "../components/nodata.component";
import LoadMoreDataBtn from "../components/load-more.component";
import axios from "axios";
import { filterPaginationData } from "../common/filter-pagination-data";
import UserCard from "../components/usercard.component";

const SearchPage = () => {
    const [params] = useSearchParams();

    const tag = params.get("tag");
    const query = params.get("query");

    const [blogs, setBlogs] = useState(null);
    const [users, setUsers] = useState(null);
    const [matchedUser, setMatchedUser] = useState(null); // store matching username user

    // --------------------------------------------------------------------
    // 1️⃣ CHECK IF QUERY MATCHES A USER NAME FIRST
    // --------------------------------------------------------------------
    const searchUserExact = async () => {
        try {
            const { data } = await axios.post(
                import.meta.env.VITE_SERVER_DOMAIN + "/search-users",
                { query }
            );

            if (data.users.length) {
                const exact = data.users.find(
                    (u) =>
                        u.personal_info.username.toLowerCase() ===
                        query.toLowerCase()
                );

                setMatchedUser(exact || null);
                setUsers(data.users);
            } else {
                setMatchedUser(null);
                setUsers([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // --------------------------------------------------------------------
    // 2️⃣ FETCH BLOGS (PRIORITY: USERNAME → TAG → TITLE/TEXT)
    // --------------------------------------------------------------------
    const searchBlogs = ({ page = 1, create_new_arr = false }) => {
        let payload = {};

        // If search contains username → fetch blogs written by that user only
        if (matchedUser) {
            // payload = { author_id: matchedUser._id, page };
            payload = { author: matchedUser._id, page };
        }
        // If tag filtering is active
        else if (tag) {
            payload = { tag: tag.toLowerCase(), page };
        }
        // Otherwise search by blog title / tags
        else {
            payload = { query, page };
        }

        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blogs", payload)
            .then(async ({ data }) => {
                let formatted = await filterPaginationData({
                    state: blogs,
                    data: data.blogs,
                    page,
                    countRoute: "/search-blogs-count",
                    data_to_send: payload,
                    create_new_arr
                });

                setBlogs(formatted);
            })
            .catch(err => console.log(err));
    };

    // --------------------------------------------------------------------
    // 3️⃣ USE EFFECT – RUNS ON QUERY CHANGE
    // --------------------------------------------------------------------
    useEffect(() => {
        resetState();

        // First, check if query matches a username
        searchUserExact().then(() => {
            // After username check, load correct blog data
            searchBlogs({ page: 1, create_new_arr: true });
        });

    }, [query, tag]);


    const resetState = () => {
        setBlogs(null);
        setUsers(null);
        setMatchedUser(null);
    };

    const UserCardWrapper = () => (
        <>
            {users === null ? (
                <Loader />
            ) : users.length ? (
                users.map((user, i) => (
                    <AnimationWrapper
                        key={i}
                        transition={{ duration: 1, delay: i * 0.08 }}
                    >
                        <UserCard user={user} />
                    </AnimationWrapper>
                ))
            ) : (
                <NoDataMessage message="No user found" />
            )}
        </>
    );

    // --------------------------------------------------------------------
    // 4️⃣ OUTPUT
    // --------------------------------------------------------------------
    return (
        <section className="h-cover flex justify-center gap-10">

            <div className="w-full">
                <InPageNavigation
                    routes={[
                        matchedUser
                            ? `Blogs by ${matchedUser.personal_info.fullname}`
                            : tag
                                ? `Blogs tagged "${tag}"`
                                : `Search results for "${query}"`,
                        "Accounts Matched"
                    ]}
                    defaultHidden={["Accounts Matched"]}
                >

                    <>
                        {blogs === null ? (
                            <Loader />
                        ) : blogs.results.length ? (
                            blogs.results.map((blog, i) => (
                                <AnimationWrapper
                                    key={i}
                                    transition={{
                                        duration: 1,
                                        delay: i * 0.1,
                                    }}
                                >
                                    <BlogPostCard
                                        content={blog}
                                        author={blog.author.personal_info}
                                    />
                                </AnimationWrapper>
                            ))
                        ) : (
                            <NoDataMessage message="No blogs published" />
                        )}

                        <LoadMoreDataBtn state={blogs} fetchDataFun={searchBlogs} />
                    </>

                    <UserCardWrapper />

                </InPageNavigation>
            </div>

            <div className="min-w-[40%] lg:min-w-[350px] max-w-min border-l border-grey pl-8 pt-3 max-md:hidden">
                <h1 className="font-medium text-xl mb-8">
                    User related to search <i className="fi fi-rr-user mt-1"></i>
                </h1>

                <UserCardWrapper />
            </div>

        </section>
    );
};

export default SearchPage;