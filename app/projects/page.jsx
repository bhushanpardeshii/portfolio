"use client"
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion"
const project = [
    {
        num: "01",
        title: "Story Guy",
        description: "An AI-powered full stack story generator that allows users to interact with characters by asking questions, creating a dynamic and immersive storytelling experience. This project combines natural language processing with AI to bring stories to life, letting users explore different narrative paths and engage directly with characters.",
        href: "https://storyguy-frontend.vercel.app/"
    },
    {
        num: "02",
        title: "Gemini AI",
        description: "An AI-powered conversational tool that mimics Google's Gemini AI. It lets users ask questions and receive intelligent, context-aware responses, showcasing the potential of generative AI in dynamic conversations.",
        href: "https://geminiclo.netlify.app/"
    },
    {
        num: "03",
        title: "Ecomm",
        description: "An e- commerce website with a shopping cart feature that allows users to browse products, add items to their cart, and apply discount coupons.The cart functionality ensures a smooth shopping experience by updating quantities, showing the total price, and offering a secure checkout process",
        href: "https://ecomm-ten-ruby.vercel.app/"
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