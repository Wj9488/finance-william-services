import { motion as anim, AnimatePresence } from "framer-motion";

const Transition = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {/* <anim.div
      className="bg-[#3a0ca3] dark:bg-[#cae9ff]"
        initial={{ translateY: "0%"  }}
        animate={{ translateY: "-100%"}}
        exit={{ translateY: "-100%"}}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "10",
          overflowY: "hidden"
        }}
      >
      </anim.div> */}
      <anim.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        {children}
      </anim.div>
    </AnimatePresence>
  );
};

export default Transition;
