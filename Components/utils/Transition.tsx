import { motion as anim, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';

const Transition = ({ children }: { children: React.ReactNode }) => {
  const [borderRadius, setBorderRadius] = useState("100%");

  useEffect(() => {
    const handleResize = () => {
      setBorderRadius(window.innerWidth < 800 ? "75%" : "100%");
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {/* <anim.div
        className="bg-[#fafafa] dark:bg-[#070707] border_bottom flex items-center justify-center"
        initial={{ translateY: "0%"  }}
        animate={{ translateY: "-100%", borderRadius: borderRadius }}
        exit={{ translateY: "-100%" }}
        transition={{
          duration: .75,
          delay: 0.1,
          ease: [0.85, 0, 0.15, 1],
        }}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: "10",
          overflowY: "hidden"
        }}
      >
        <anim.div 
        initial={{ rotate: "0deg", y: 30 }}
        animate={{ rotate: "45deg", y: 0 }}
        exit={{ rotate: "45deg", }}
        transition={{
          duration: .25,
          delay: 0.1,
          ease: [0.85, 0, 0.15, 1],
        }}
        className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] bg-[#070707] dark:bg-[#fafafa]">
        </anim.div>
      </anim.div> */}
      <anim.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0}}
        transition={{
          duration: 0.5,
          delay: 0,
          // ease: [0.85, 0, 0.15, 1],
          ease: "easeInOut"
        }}
        className="overflow-hidden"
      >
        {children}
      </anim.div>
    </AnimatePresence>
  );
};

export default Transition;
