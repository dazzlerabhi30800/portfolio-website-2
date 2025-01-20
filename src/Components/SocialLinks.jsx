import React from "react";
import { FaCodepen, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaHashnode, FaMedium } from "react-icons/fa6";

const SocialLinks = () => {
  const socialData = [
    {
      icon: <FaGithub />,
      link: "https://github.com/dazzlerabhi30800",
      colorClass: "text-violet-500",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/Abhishek30800",
      colorClass: "text-sky-400",
    },
    {
      icon: <FaCodepen />,
      link: "https://codepen.io/dazzlerabhi30800",
      colorClass: "text-gray-400",
    },
    {
      icon: <FaHashnode />,
      link: "https://hashnode.com/@dazzlerabhi30800",
      colorClass: "text-blue-400",
    },
    {
      icon: <FaMedium />,
      link: "https://medium.com/@abhisingh72065",
      colorClass: "text-white",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/abhishek-choudhary-00679621b/",
      colorClass: "text-blue-500",
    },
  ];
  return (
    <section className="social--section mt-20 md:mt-28">
      <h2
        style={{ margin: "1rem auto", width: "fit-content" }}
      >
        Social Links
      </h2>
      <div className="social--wrapper grid grid-cols-3 gap-16 md:gap-20 sm:gap-x-28 mt-10">
        {socialData?.map((data, index) => (
          <div key={index} className="social transition-all hover:scale-125">
            <a
              className={`${data.colorClass} text-[1.8rem] sm:text-[2.5rem] md:text-[3rem]`}
              href={data.link}
              target="_blank"
            >
              {data.icon}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
