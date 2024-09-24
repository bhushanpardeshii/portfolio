"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa"
import {
    SiTailwindcss,
    SiNextdotjs,
    SiBootstrap,
    SiExpress,
    SiRedux,

} from "react-icons/si"
const about = {
    title: "About ",
    description: "Personal Information",
    info: [
        {
            filename: "name",
            filevalue: "Bhushan Pardeshi"
        },
        {
            filename: "Phone",
            filevalue: "+91 9359459577"
        },
        {
            filename: "Experience",
            filevalue: "6 months"
        },
        {
            filename: "Email",
            filevalue: "bhushanpardeshi549@gmail.com"
        },
        {
            filename: "nationality",
            filevalue: "Indian"
        },
    ]
}
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "During two internships, I led a landing page build with the design team and developed React.js projects, improving UI performance and delivering effective web solutions. These experiences sharpened my frontend skills.",
    items: [
        {
            company: "Infomanav",
            position: "Frontend Developer Intern",
            duration: "March 2024-May 2024"
        },
        {
            company: "Centralogic",
            position: "Frontend Developer Intern",
            duration: "Oct 2023-Jan 2024"
        }
    ]
};
const education = {
    icon: "/assets/resume/cap.svg",
    title: "Education",
    description: "I completed my engineering degree in Computer Science in 2024 with a first-class 7.47 CGPA and achieved 71.85% in my HSC. These academic accomplishments have provided a strong foundation for my career in tech.",
    items: [
        {
            institue: "Sandip Foundation",
            degree: "Bachelor of Engineering in Computer Science",
            duration: "2020- 2024"
        },
        {
            institue: "Savitribai Phule Pune university",
            degree: "HSC (science)",
            duration: "2018-2020"
        }
    ]
}
const skills = {
    title: "Skills",
    description: " Proficient in building dynamic, responsive web applications with a focus on user-friendly interfaces and enhanced performance through effective collaboration and design principles.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "Html5"
        },
        {
            icon: <FaCss3 />,
            name: "Css3"
        },
        {
            icon: <FaJs />,
            name: "Javascript"
        },
        {
            icon: <FaReact />,
            name: "ReactJS"
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJs"
        },
        {
            icon: <SiNextdotjs />,
            name: "NextJs"
        },
        {
            icon: <SiExpress />,
            name: "Express"
        },
        {
            icon: <SiRedux />,
            name: "Redux"
        },
        {
            icon: <SiTailwindcss />,
            name: "TailwindCss"
        },
        {
            icon: <SiBootstrap />,
            name: "Bootstrap"
        },
        {
            icon: <FaFigma />,
            name: "Figma"
        },

    ]

}
const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transitiion: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center mx-6 justify-center py-12 lg:py-0"
        >
            <div className="container mx-auto">

                <Tabs defaultValue="experience" className="flex flex-col lg:flex-row gap-[60px] ">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center lg:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center lg:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center mt-4 gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 ">{item.institue}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p >{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>

                            </div>

                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center lg:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center lg:justify-start gap-4">
                                                <span className="text-white/60">{item.filename}</span>
                                                <span className="text-xl">{item.filevalue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

        </motion.div>
    )
}

export default Resume