import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { useState } from "react";

interface Post {
    id: number;
    title: string;
    user_id: number;
    body: string;
}

interface blogProps {
    postsData: Post[];
}

const Blog = (props: blogProps) => {
    const { postsData } = props;
    const Router = useRouter();

    const [post, setPosts] = useState(postsData.slice(0, 10));
    const [pageNumber, setPageNumber] = useState(0);
    const postsPerPage = 3;
    const pagesVisited = pageNumber * postsPerPage;
    const pageCount = Math.ceil(postsData.length / postsPerPage);

    const changePage = ({ selected }: any) => {
        // let current = localStorage.getItem("PageNumber") ? localStorage.getItem("PageNumber") : localStorage.setItem("PageNumber", selected);
        // let history = localStorage.getItem("PageNumber") ? localStorage.getItem("PageNumber") : localStorage.setItem("PageNumber", current);
        // console.log(history);
        // setPageNumber(history);
        setPageNumber(selected);
    };

    const displayPosts = post.slice(pagesVisited, pagesVisited + postsPerPage).map((p) => {
        return (
            <div
                key={p.id}
                onClick={() => {
                    Router.push(`/blog/${p.id}`);
                }}
                className="bg-gray-400 w-[300px] rounded-lg m-10 drop-shadow-2xl outline outline-slate-300 cursor-pointer"
            >
                <Image src="/logo.png" width={300} height={300} alt="image" />
                <div className="p-5">
                    <h1 className="font-bold text-xl">{p.title && p.title.slice(0, 40) + "..."}</h1>
                    <p className="font-thin text-sm">Publisher ID: {p.user_id}</p>
                    <p className="font-normal text-base">{p.body && p.body.slice(0, 200) + "..."}</p>
                    <button className="bg-white rounded-md py-1 px-3 mt-3 hover:text-white hover:bg-slate-500">Read More</button>
                </div>
            </div>
        );
    });

    return (
        <Layout pageTitle="Blogs">
            <div className="py-20">
                <h1 className="text-center font-bold text-4xl">Blog List Page</h1>
                <div className="flex justify-center flex-wrap">{displayPosts}</div>
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName="w-[100%] height-[40px] list-none flex justify-center my-10 paginationBtn"
                    previousClassName=""
                    nextClassName=""
                    disabledClassName=""
                    activeClassName="paginationActive"
                />
            </div>
        </Layout>
    );
};

export async function getServerSideProps() {
    const res = await fetch("https://gorest.co.in/public/v2/posts");
    const postsData = await res.json();
    return {
        props: {
            postsData,
        },
    };
}

export default Blog;
