"use client"
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion"
const project = [
    {
        num: "01",
        title: "AI Course",
        description: " AI-powered course creation platform enables users to design and develop courses on a wide range of topics with the help of AI. After creating a course, it is saved to a database, making it accessible for other users to explore and learn from. The AI assists with structuring content, enhancing course material, and tailoring it for different learning levels, creating a collaborative and dynamic educational environment where users can both create and discover engaging courses.",
        href: "https://ai-course-omega.vercel.app/"
    },
    {
        num: "02",
        title: "Story Guy",
        description: "An AI-powered full stack story generator that allows users to interact with characters by asking questions, creating a dynamic and immersive storytelling experience. This project combines natural language processing with AI to bring stories to life, letting users explore different narrative paths and engage directly with characters.",
        href: "https://storyguy-frontend.vercel.app/"
    },
    {
        num: "03",
        title: "EtherWatch",
        description: "Etherwatch is a real-time Ethereum monitoring solution that tracks smart contract balances and provides instant notifications via a user-friendly Telegram bot. Built on Alchemy's secure Ethereum API, it supports monitoring multiple contracts simultaneously, offering fast setup with simple commands. Etherwatch ensures users stay informed about critical changes effortlessly.",
        href: "https://ether-watch.vercel.app/"
    },
    {
        num: "04",
        title: "TweetSage",
        description: "TweetSage is an AI-powered tool that helps users understand terms and concepts in tweets instantly. By tagging @TweetSage_AI in a reply, users receive clear, concise explanations without leaving Twitter/X. It provides contextual understanding by analyzing entire threads for more accurate responses. This makes it ideal for those looking to decode complex tweets effortlessly.",
        href: "https://tweetsage.vercel.app/"
    }
]
const Projects = () => {
    return (
        <section className="min-h-[80vh] mx-6 flex flex-col justify-center py-12 lg:py-0">

            <div className="container mx-auto ">
                <motion.div initial={{ opacity: 0 }} animate={{
                    opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {project.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline  text-transparent group-hover:text-outline-hover">
                                        {service.num}

                                    </div>
                                    <Link href={service.href} className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-2xl " />
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>

                            </div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}

export default Projects 