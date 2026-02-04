import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const LoveLetter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="py-16 px-4"
    >
      <div className="max-w-2xl mx-auto">
        {/* Letter container */}
        <motion.div
          initial={{ rotateX: -10, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-card/80 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 border border-valentine-pink/30 relative overflow-hidden"
        >
          {/* Decorative corner hearts */}
          <Heart className="absolute top-4 left-4 w-6 h-6 text-valentine-rose/40 fill-valentine-rose/40" />
          <Heart className="absolute top-4 right-4 w-6 h-6 text-valentine-rose/40 fill-valentine-rose/40" />
          <Heart className="absolute bottom-4 left-4 w-6 h-6 text-valentine-rose/40 fill-valentine-rose/40" />
          <Heart className="absolute bottom-4 right-4 w-6 h-6 text-valentine-rose/40 fill-valentine-rose/40" />

          {/* Letter header */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2"
            >
              <Sparkles className="w-6 h-6 text-valentine-gold" />
              <h2 className="text-4xl md:text-5xl font-script text-primary">
                My Dearest Foram
              </h2>
              <Sparkles className="w-6 h-6 text-valentine-gold" />
            </motion.div>
          </div>

          {/* Letter content - customize this message! */}
          <div className="space-y-6 font-romantic text-lg md:text-xl text-foreground leading-relaxed">
            <p>
              From the moment I met you, my world became a more beautiful place.
              Your smile lights up even my darkest days, and your laughter is the
              sweetest melody I've ever heard.
            </p>

            <p>
              Every moment with you feels like a dream I never want to wake up
              from. You make me want to be a better person, and I'm so grateful
              to have you in my life.
            </p>

            <p>
              You are my sunshine, my inspiration, and my everything. I can't
              imagine my life without you, and I don't want to.
            </p>

            <p className="text-center text-primary font-elegant text-xl md:text-2xl pt-4">
              Will you be my Valentine, today and always? 💕
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8 text-right">
            <p className="font-script text-2xl md:text-3xl text-primary">
              With all my love,
            </p>
            <p className="font-script text-3xl md:text-4xl text-valentine-rose mt-2">
              Your Valentine ❤️
            </p>
          </div>
        </motion.div>

        {/* Hint for customization */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-6 text-muted-foreground text-sm font-romantic italic"
        >
          💡 Tip: Edit the message above in the code to personalize your love letter!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default LoveLetter;
