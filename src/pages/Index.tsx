import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import ValentineHero from "@/components/ValentineHero";
import SuccessPage from "@/components/SuccessPage";

const Index = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleYesClick = () => {
    setHasAccepted(true);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Floating background elements */}
      <FloatingHearts />
      <Sparkles />

      {/* Main content */}
      <AnimatePresence mode="wait">
        {!hasAccepted ? (
          <motion.div
            key="hero"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <ValentineHero onYesClick={handleYesClick} />
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SuccessPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
