"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
    };

    try {
        const response = await fetch('../api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            // Reset form or handle success
        } else {
            alert('Error sending message');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+91 9359459577"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "bhushanpardeshi549@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Nashik,Maharashtra,India"
    },

]
const Contact = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{
            opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }} className="py-6 mx-6">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-[30px]">
                    <div className="lg:w-[54%] order-2 lg:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">I’d love to hear from you! Please fill out the form below with your name, email, and message.
                                Your inquiries and feedback are appreciated!</p>
                            <div className="grid grids-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstname" type="firstname" placeholder="Firstname" />
                                <Input name="lastname" type="lastname" placeholder="Lastname" />
                                <Input name="email" type="email" placeholder="Email" />
                                <Input name="phone" type="phone" placeholder="Phone Number" />
                            </div>
                            <Textarea name="message" className="h-[200px]" placeholder="Type your message.." />
                            <Button type="submit" size="md" className="max-w-40">Send Message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact