import React from "react";
import Header from '../header';

export default function Navbar(props) {
  const [scroll, setScroll] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  // Screen size eka check karana function eka
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768); // 768px walata adu nam mobile widiyata ganne
  };

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    // Initial check
    checkScreenSize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScreenSize); // Screen eka resize weddi check karanawa

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Methana logic eka wenas wenawa:
  // Mobile nam kelinma active classes yanawa. 
  // Desktop nam scroll > 80 unama thama active wenne.
  const className = (isMobile || scroll > 80) 
    ? "fixed-navbar animated fadeInDown active" 
    : "fixed-navbar";

  return (
    <div className={className}>
        <Header Logo={props.Logo} topbarNone={props.topbarNone} hClass={props.hClass}/>
    </div>
  ); 
}