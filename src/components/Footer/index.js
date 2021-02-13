import React from "react";


const Footer = () => {
  // write js to make footer change classes on scroll

  return (
    <div className="flex justify-center items-center h-14 cool-bg  text-white pin-b fixed w-screen bottom-0">
      <a target="blank" href="https://github.com/ajlaursen">
        <img className="object-scale-down" src="/Images/src/iconfinder_github_317712-2.png" alt="git hub" />
      </a>
      <a target="blank" href="https://www.linkedin.com/in/ajlaursen/">
        <img className="object-scale-down" src="/Images/iconfinder_Circled_Linkedin_svg_5279114.png" alt="linked in" />
      </a>
      <a target="blank" href="https://www.youtube.com/ajlaursen">
        <img className="object-scale-down" src="/Images/iconfinder_58-youtube_104445.png" alt="youtube" />
      </a>
      <a target="blank" href="https://www.instagram.com/completecycling/">
        <img className="object-scale-down" src='/Images/iconfinder_38-instagram_1161953.png' alt="instagram" />
      </a>
    </div>
  );
};

export default Footer;
