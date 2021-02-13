import React from "react";
import gitHub from "../../Images/iconfinder_github_317712-2.png";
import instagram from "../../Images/iconfinder_38-instagram_1161953.png";
import youtube from "../..//Images/iconfinder_58-youtube_104445.png";
import linkedin from "../../Images/iconfinder_Circled_Linkedin_svg_5279114.png";

const Footer = () => {
  // write js to make footer change classes on scroll

  return (
    <div className="flex justify-center items-center h-14 cool-bg  text-white pin-b fixed w-screen bottom-0">
      <a target="blank" href="https://github.com/ajlaursen">
        <img className="object-scale-down" src={gitHub} alt="git hub" />
      </a>
      <a target="blank" href="https://www.linkedin.com/in/ajlaursen/">
        <img className="object-scale-down" src={linkedin} alt="linked in" />
      </a>
      <a target="blank" href="https://www.youtube.com/ajlaursen">
        <img className="object-scale-down" src={youtube} alt="youtube" />
      </a>
      <a target="blank" href="https://www.instagram.com/completecycling/">
        <img className="object-scale-down" src={instagram} alt="instagram" />
      </a>
    </div>
  );
};

export default Footer;
