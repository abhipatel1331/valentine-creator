import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface ValentineHeroProps {
  onYesClick: () => void;
}

const ValentineHero = ({ onYesClick }: ValentineHeroProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [noAttempts, setNoAttempts] = useState(0);

  const moveNoButton = useCallback(() => {
    const maxX = 200;
    const maxY = 150;
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    setNoButtonPosition({ x: newX, y: newY });
    setNoAttempts((prev) => prev + 1);
    // Make Yes button grow with each attempt
    setYesButtonScale((prev) => Math.min(prev + 0.1, 2));
  }, []);

  const noMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you being serious?",
    "This is so sad!",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto"
      >
        {/* Decorative hearts */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center gap-4 mb-6"
        >
          <Heart className="w-8 h-8 text-primary fill-primary" />
          <Heart className="w-12 h-12 text-valentine-rose fill-valentine-rose" />
          <Heart className="w-8 h-8 text-primary fill-primary" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-script text-primary mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Foram
        </motion.h1>

        <motion.p
          className="text-3xl md:text-4xl lg:text-5xl font-elegant text-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Will You Be My Valentine?
        </motion.p>

        {/* Interactive buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative min-h-[120px]">
          {/* Yes Button - grows on hover and with each No attempt */}
          <motion.div
            animate={{ scale: yesButtonScale }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              onClick={onYesClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl md:text-2xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-elegant"
              style={{
                transform: `scale(${yesButtonScale})`,
              }}
              onMouseEnter={() =>
                setYesButtonScale((prev) => Math.min(prev + 0.05, 2))
              }
            >
              <Heart className="w-6 h-6 mr-2 fill-current" />
              Yes!
            </Button>
          </motion.div>

          {/* No Button - runs away */}
          <motion.div
            animate={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <Button
              variant="outline"
              className="border-2 border-muted-foreground/30 text-muted-foreground text-lg px-6 py-4 rounded-full hover:border-primary/50 transition-all duration-300 font-elegant"
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
            >
              {noMessages[Math.min(noAttempts, noMessages.length - 1)]}
            </Button>
          </motion.div>
        </div>

        {/* Hint text after a few attempts */}
        {noAttempts >= 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-muted-foreground font-romantic text-lg italic"
          >
            The Yes button is looking more appealing, isn't it? 💕
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default ValentineHero;
