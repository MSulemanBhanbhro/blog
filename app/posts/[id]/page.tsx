"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { useParams } from "next/navigation";

// Blog Detail Component
const blogDetail = () => {
    const posts = [
        {
            id: 1,
            author: "M Suleman",
            title: "Agentic AI: A New Frontier in Artificial Intelligence",
            description:
                "Agentic AI represents a transformative leap in the field of artificial intelligence...",
            image: "/agentic.jpg",
            date: "2024-12-24",
            time: "10 min read",
            icondate: <MdOutlineDateRange />,
            icontime: <IoMdTime />,
        },
        {
            id: 2,
            author: "M Suleman",
            title: "The Rise of AI Technologies: Transforming Our World",
            description:
                "The rise of AI technologies is revolutionizing the way we live, work, and interact with the world...",
            image: "/rise.png",
            date: "2022-01-01",
            time: "10 min read",
            icondate: <MdOutlineDateRange />,
            icontime: <IoMdTime />,
        },
        {
            id: 3,
            author: "M Suleman",
            title: "How to Install NextJS 15",
            description:
                "Explore how AI technologies are transforming industries and shaping our future.",
            image: "/next1.jpg",
            date: "2022-01-01",
            time: "10 min read",
            icondate: <MdOutlineDateRange />,
            icontime: <IoMdTime />,
        },
        {
            id: 4,
            author: "M Suleman",
            title: "NextJS 15: The Exciting New Launch",
            description:
                "Explore how AI technologies are transforming industries and shaping our future.",
            image: "/next.png",
            date: "2022-01-01",
            time: "10 min read",
            icondate: <MdOutlineDateRange />,
            icontime: <IoMdTime />,
        },
    ];
    const params = useParams();
    const postId = Number(params.id);
    const post = posts.find((prod) => prod.id === postId);
    if (!post) {
        return <div className="text-center">Blog not found</div>;
    }
    return (
        <div className="px-4 md:px-8 lg:px-20 my-10">
            <div className="border-2 border-black rounded-lg p-6 md:p-8 lg:p-10 bg-white shadow-md">
                <div>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">{post.title}</h1>
                </div>
                <div className="flex flex-wrap gap-4 items-center mt-4">
                    <div className="flex gap-2 items-center text-gray-700 text-sm">
                        <FaUser className="text-base" />
                        <p>{post.author}</p>
                    </div>
                    <div className="flex gap-2 items-center text-gray-700 text-sm">
                        {post.icondate}
                        <p>{post.date}</p>
                    </div>
                    <div className="flex gap-2 items-center text-gray-700 text-sm">
                        {post.icontime}
                        <p>{post.time}</p>
                    </div>
                </div>
                <div className="my-6">
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={600}
                        className="rounded-lg w-full object-cover"
                    />
                </div>
                <div>
                    <p className="text-sm md:text-base lg:text-lg text-gray-800">{post.description}</p>
                </div>
            </div>

            {/* Call Comment Section Below */}
            <CommentSection />
        </div>
    );
};

// Comment Section Component
const CommentSection = () => {
    const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    // Load comments from localStorage when the component mounts
    useEffect(() => {
        const savedComments = localStorage.getItem("comments");
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, []);

    // Save comments to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments]);

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && comment) {
            const newComments = [...comments, { name, comment }];
            setComments(newComments);
            setName("");
            setComment("");
        }
    };

    return (
        <div className="mt-10 border-2 border-gray-300 rounded-lg bg-white shadow-md p-6 md:p-8 lg:p-10">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Leave a Comment</h2>
            <form onSubmit={handleCommentSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-400 p-2 rounded-lg w-full text-sm md:text-base"
                    required
                />
                <textarea
                    placeholder="Your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border border-gray-400 p-2 rounded-lg w-full text-sm md:text-base"
                    rows={4}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition text-sm md:text-base"
                >
                    Submit
                </button>
            </form>

            {comments.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Comments:</h3>
                    <ul className="space-y-4">
                        {comments.map((comment, index) => (
                            <li key={index} className="border-b border-gray-300 pb-2">
                                <p className="font-semibold text-gray-800">{comment.name}</p>
                                <p className="text-sm md:text-base text-gray-600">{comment.comment}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default blogDetail;
