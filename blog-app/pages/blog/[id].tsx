import Layout from "@/components/Layout";
import Link from "next/link";
import { withRouter } from "next/router";

interface PostDetail {
    id: number;
    title: string;
    user_id: number;
    body: string;
}

interface Comment {
    id: number;
    post_id: number;
    name: string;
    email: string;
    body: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

interface PostDetailProps {
    post: PostDetail;
    comments: Comment[];
    users: User[];
}

const BlogDetail = (props: PostDetailProps) => {
    const { post, comments, users } = props;
    let filteredUser = users.find((user) => user.id === post.user_id);
    let filteredComments = comments.find((comment) => comment.post_id === post.id);
    return (
        <Layout pageTitle="Blog Detail">
            <div className="px-4 lg:px-60 sm:px-10 py-20">
                <div>
                    <Link href="/blog">Back</Link>
                </div>
                <h1 className="text-center font-bold text-4xl">Blog Detail Page</h1>
                <div className="my-10 shadow-xl rounded-xl py-2 px-5 border">
                    <h1 className="font-extralight md:text-sm text-xs">ID Post : {post.id}</h1>
                    <h1 className="md:text-5xl text-xl font-bold">{post.title}</h1>
                    <p className="md:text-lg text-sm font-thin my-2">Post Publisher: {filteredUser ? filteredUser.name : `Unknown (User ID: ${post.user_id})`}</p>
                    <p>
                        Post Detail: <br />
                        {post.body}
                    </p>
                </div>
                <div className="bg-gray-300 py-5 px-5 rounded-xl w-[100%]">
                    <div className="font-semibold text-xl">Comments Section</div>
                    <div className="flex">
                        <input className="w-[100%] my-5 me-5 h-10 rounded-md ps-3" type="text" placeholder="Leave a comment..." />
                        <button className="bg-sky-300 hover:bg-sky-700 hover:text-white transition-all ease-in w-10 h-10 rounded-full m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                    {filteredComments ? (
                        comments.map((comment) => {
                            return (
                                <div key={comment.id}>
                                    {comment.post_id === post.id && (
                                        <div className="bg-white shadow-xl rounded-md w-[100%] my-2 p-5 flex">
                                            <div className="flex justify-center me-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 m-auto">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-bold">{comment.name}</p>
                                                <p>{comment.body}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center">No Comments Found</div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export async function getServerSideProps(context: any) {
    const { id } = context.params;
    const [resPost, resComments, resUsers] = await Promise.all([fetch(`https://gorest.co.in/public/v2/posts/${id}`), fetch("https://gorest.co.in/public/v2/comments"), fetch("https://gorest.co.in/public/v2/users")]);

    const [post, comments, users] = await Promise.all([resPost.json(), resComments.json(), resUsers.json()]);
    return {
        props: {
            post,
            comments,
            users,
        },
    };
}

export default BlogDetail;
