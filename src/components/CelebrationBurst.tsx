import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface BurstElement {
  id: number;
  x: number;
  y: number;
  type: "heart" | "sparkle";
  size: number;
  rotation: number;
}

const CelebrationBurst = () => {
  const [elements, setElements] = useState<BurstElement[]>([]);

  useEffect(() => {
    const newElements: BurstElement[] = [];
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const distance = 100 + Math.random() * 200;
      newElements.push({
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        type: Math.random() > 0.5 ? "heart" : "sparkle",
        size: 16 + Math.random() * 24,
        rotation: Math.random() * 360,
      });
    }
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{
            x: 0,
            y: 0,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            x: element.x,
            y: element.y,
            scale: [0, 1.5, 1],
            opacity: [1, 1, 0],
            rotate: element.rotation,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute"
        >
          {element.type === "heart" ? (
            <Heart
              className="text-primary fill-primary"
              style={{ width: element.size, height: element.size }}
            />
          ) : (
            <Sparkles
              className="text-valentine-gold"
              style={{ width: element.size, height: element.size }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CelebrationBurst;
