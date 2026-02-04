import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import LoveLetter from "./LoveLetter";
import PhotoGallery from "./PhotoGallery";
import CelebrationBurst from "./CelebrationBurst";
import { useState, useEffect } from "react";

const SuccessPage = () => {
  const [showBurst, setShowBurst] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBurst(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Celebration burst on entry */}
      {showBurst && <CelebrationBurst />}

      {/* Success header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center py-16 px-4"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block mb-6"
        >
          <Heart className="w-20 h-20 text-primary fill-primary mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-script text-primary mb-4"
        >
          You Said Yes!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-elegant text-foreground"
        >
          This is the happiest day of my life! 💕
        </motion.p>
      </motion.div>

      {/* Love letter section */}
      <LoveLetter />

      {/* Photo gallery section */}
      <PhotoGallery />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="py-12 text-center"
      >
        <p className="font-script text-2xl text-primary">
          Made with ❤️ for Foram
        </p>
        <p className="font-romantic text-muted-foreground mt-2">
          Happy Valentine's Day 2025
        </p>
      </motion.footer>
    </div>
  );
};

export default SuccessPage;
