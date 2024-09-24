"use client";

import { motion } from "framer-motion"
import Image from "next/image";
const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}>
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
                    className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] ">
                    <Image src="/assets/profileimg.png" priority quality={100} fill alt="profileimg" className="object-contain" />

                </motion.div>
            </motion.div>
        </div>
    )
}

export default Photo