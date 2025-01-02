'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import the styles

// Define the type for the blog post
interface Post {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    icondate: React.JSX.Element;
    icontime: React.JSX.Element;
}

const Posts = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Specify the state type explicitly
    const [posts, setPosts] = useState<Post[]>([]);

    // Simulate an API call to fetch blog data
    useEffect(() => {
        setTimeout(() => {
            setPosts([
                {
                    id: 1,
                    title: 'Agentic AI: A New Frontier in Artificial Intelligence',
                    description: 'Agentic AI is transforming the landscape of artificial intelligence by empowering autonomous systems to make real-world decisions independently.',
                    image: '/agentic.jpg',
                    date: '2024-12-24',
                    time: '10 min read',
                    icondate: <MdOutlineDateRange />,
                    icontime: <IoMdTime />,
                },
                {
                    id: 2,
                    title: 'Agentic AI: A New Frontier in Artificial Intelligence',
                    description: 'Discover how Agentic AI is reshaping the landscape of artificial intelligence.',
                    image: '/ai.webp',
                    date: '2022-01-01',
                    time: '10 min read',
                    icondate: <MdOutlineDateRange />,
                    icontime: <IoMdTime />,
                },
                {
                    id: 3,
                    title: 'The Rise of AI Technologies: Transforming Our World',
                    description: 'Explore how AI technologies are transforming industries and shaping our future.',
                    image: '/rise.png',
                    date: '2022-01-01',
                    time: '10 min read',
                    icondate: <MdOutlineDateRange />,
                    icontime: <IoMdTime />,
                },
                {
                    id: 4,
                    title: 'How to Install NextJS 15',
                    description: 'Learn how to install NextJS 15 in a few simple steps and start building your app.',
                    image: '/next1.jpg',
                    date: '2022-01-01',
                    time: '10 min read',
                    icondate: <MdOutlineDateRange />,
                    icontime: <IoMdTime />,
                },
                {
                    id: 5,
                    title: 'NextJS 15: The Exciting New Launch',
                    description: 'Discover the exciting features of NextJS 15 and how they improve web development.',
                    image: '/next.png',
                    date: '2022-01-01',
                    time: '10 min read',
                    icondate: <MdOutlineDateRange />,
                    icontime: <IoMdTime />,
                },
            ]);
            setIsLoading(false);
        }, 2000); // Simulating a 2-second delay
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold text-center my-20">Our Latest Blogs</h1>
            <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-center gap-6 p-4 my-8">

                {isLoading ? (
                    // Show skeleton loader while data is loading
                    Array.from({ length: 3 }).map((_, index) => (
                        <div
                            className="w-full sm:w-[48%] md:w-[30%] h-auto p-4 border rounded-lg shadow-lg relative"
                            key={index}
                        >
                            <Skeleton height={200} className="w-full object-cover rounded-lg" />
                            <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <Skeleton width={120} height={20} />
                                <Skeleton width={80} height={20} />
                            </div>
                            <div>
                                <Skeleton count={2} width="100%" height={20} />
                            </div>
                            <div className="mt-4">
                                <Skeleton width={100} height={20} />
                            </div>
                        </div>
                    ))
                ) : (
                    // Render actual content after loading
                    posts.map((item) => (
                        <div
                            className="w-full sm:w-[48%] md:w-[30%] h-auto p-4 border rounded-lg shadow-lg relative"
                            key={item.id}
                        >
                            {/* Image Section */}
                            <div className="relative">
                                <Image
                                    src={item.image}
                                    alt="Blog Image"
                                    width={800}
                                    height={800}
                                    className="w-full object-cover rounded-lg"
                                />
                                {/* H1 Title fixed on top of the image */}
                                <h1 className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white text-lg font-semibold p-2 rounded">
                                    {item.title}
                                </h1>
                            </div>

                            {/* Metadata Section */}
                            <div className="my-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    {item.icondate}
                                    <p>{item.date}</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    {item.icontime}
                                    <p>{item.time}</p>
                                </div>
                            </div>

                            {/* Description Section */}
                            <div>
                                <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
                            </div>

                            {/* Read More Link */}
                            <div className="mt-4">
            
                                <Link href={`/posts/${item.id}`} className="flex gap-2 items-center text-blue-600 hover:underline text-sm sm:text-base">
                                    Read more <FaArrowRight />
                                </Link>

                            </div>
                        </div>
                    ))
                )}

                
                
                
            </div>
        </>

    );
};

export default Posts;
