"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { useParams } from "next/navigation";

interface PostType {
    id: number;
    author: string;
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    icondate: React.ReactNode;
    icontime: React.ReactNode;
}

const BlogDetail = () => {
    const posts: PostType[] = [
        {
            id: 1,
            author: "M Suleman",
            title: "Agentic AI: A New Frontier in Artificial Intelligence",
            description: `Agentic AI refers to artificial intelligence systems that are designed not merely to execute predefined tasks or respond to fixed inputs, but to exhibit true agency. In essence, Agentic AI systems can take initiative, make decisions, and act autonomously within specific constraints and goals. Unlike traditional AI, which generally performs tasks based on explicit instructions or responds to pre-programmed inputs, Agentic AI systems have the capacity to:

            Understand their environment: These systems can process information about their surroundings and use this data to form an understanding of the situation at hand.

            Identify goals or objectives: Instead of just executing commands, Agentic AI can identify objectives based on the context and environment.

            Take action to achieve those goals: With the ability to make decisions, Agentic AI systems can take appropriate actions to achieve their goals, often with minimal human intervention.

            In short, Agentic AI doesn't just follow orders—it takes initiative to solve problems or optimize outcomes on its own.` ,
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
            description:    `Artificial Intelligence (AI) refers to the simulation of human intelligence processes by machines, particularly computer systems. These processes include learning, reasoning, problem-solving, perception, and language understanding. AI is powered by algorithms and vast amounts of data, enabling machines to process information and make decisions without human intervention.

           Over the last few decades, AI has advanced through multiple stages:

             Rule-Based Systems: The earliest form of AI was based on rule-based systems, where machines followed predefined instructions to solve specific problems.
                Machine Learning (ML): This phase marked the rise of statistical models and algorithms that allowed machines to learn from data. Machine learning models could identify patterns and make predictions based on historical data.
                Deep Learning: A subset of machine learning, deep learning involves neural networks with many layers, enabling machines to process more complex data, such as images, audio, and video. This has driven advancements in computer vision, speech recognition, and natural language processing.
                Reinforcement Learning: Reinforcement learning empowers machines to learn by trial and error, much like how humans learn from experiences. This approach has been used in applications such as robotics and game-playing AI, where systems improve through feedback from their actions.
                Today, AI continues to evolve with the introduction of even more advanced techniques, including generative AI and autonomous systems that can make decisions and take actions with minimal human input.`,
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
                    `Next.js is a powerful React framework that allows developers to build fast, scalable web applications. The latest version, Next.js 15, comes with several new features and improvements, including better performance, enhanced routing capabilities, and updates to server-side rendering. In this guide, we will walk you through the installation process of Next.js 15, setting up your development environment, and getting your first Next.js project up and running.`,
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
            description:    `Next.js 15 introduces several exciting features that will significantly improve your development experience, application performance, and scalability. Here’s a breakdown of the most notable changes:

1. Enhanced Routing and Dynamic Routes
Next.js has always had a strong routing system, but with version 15, dynamic routing has received a major upgrade. You can now build dynamic pages with even more flexibility and power. The new routing capabilities make it easier to build applications that rely heavily on dynamic content, such as blogs, e-commerce websites, or news portals.

File-based Routing Enhancements: Next.js now supports dynamic segments in the file system, making it easier to handle URL-based routes dynamically.
Improved Nested Routing: With Next.js 15, nested routes are handled more efficiently, allowing you to structure your application with greater ease and flexibility.
2. Server Components (Beta)
One of the most anticipated features in Next.js 15 is the introduction of Server Components. Server components allow you to render parts of your application on the server, which improves the overall performance and reduces the amount of JavaScript sent to the client.

Reduced Bundle Size: Server Components enable you to offload non-interactive parts of the app to the server, which significantly reduces the size of the JavaScript bundle that the client needs to download.
Better Performance: Server-side rendering (SSR) becomes even more powerful, allowing for faster page loads and a more efficient data-fetching process.
The feature is still in beta, but it's a major step forward in optimizing the performance of React applications, especially for large-scale web apps.

3. Concurrent Rendering (Experimental)
Next.js 15 also introduces Concurrent Rendering as an experimental feature. This allows Next.js to render multiple parts of the page simultaneously, rather than sequentially, leading to improved responsiveness and faster page loads.

Faster User Interactions: By splitting the rendering process, user interactions can become more responsive, improving the overall user experience.
Optimized Rendering: React &rsquo;s Concurrent Mode is now integrated with Next.js, enabling better prioritization of rendering and data fetching, so the most important content is rendered first.
While Concurrent Rendering is still in the experimental phase, it shows the potential of Next.js 15 to handle modern web development &rsquo;s demands more efficiently.`,
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
            <CommentSection />
        </div>
    );
};

const CommentSection = () => {
    const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedComments = localStorage.getItem("comments");
            if (savedComments) {
                setComments(JSON.parse(savedComments));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("comments", JSON.stringify(comments));
        }
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

export default BlogDetail;
