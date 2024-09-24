import Link from "next/link"

import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
const socials = [
    { icon: <FiGithub />, path: "https://github.com/bhushanpardeshii" },
    { icon: <FiLinkedin />, path: "http://www.linkedin.com/in/bhushan-pardeshi-9b82b921b" },
    { icon: <FiTwitter />, path: "https://x.com/krishnPardeshi1" },
]
const Social = () => {
    return (
        <div className="flex gap-8 text-3xl " >
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className="hover:text-accent">
                        {item.icon}
                    </Link>
                );
            })}
        </div>

    )
};

export default Social;