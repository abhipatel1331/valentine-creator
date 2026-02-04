import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  caption: string;
}

// Placeholder photos - replace these with your actual photos!
const photos: Photo[] = [
  {
    id: 1,
    src: "/placeholder.svg",
    caption: "Our first adventure together",
  },
  {
    id: 2,
    src: "/placeholder.svg",
    caption: "That special moment",
  },
  {
    id: 3,
    src: "/placeholder.svg",
    caption: "Making memories",
  },
  {
    id: 4,
    src: "/placeholder.svg",
    caption: "Always smiling with you",
  },
  {
    id: 5,
    src: "/placeholder.svg",
    caption: "My favorite place is next to you",
  },
  {
    id: 6,
    src: "/placeholder.svg",
    caption: "Forever and always",
  },
];

const PhotoGallery = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-4xl md:text-5xl font-script text-primary mb-4"
          >
            Our Memories
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 1, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-transparent via-valentine-rose to-transparent mx-auto"
          />
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="group relative"
            >
              {/* Polaroid-style frame */}
              <div className="bg-card rounded-lg shadow-xl p-3 pb-16 border border-valentine-pink/20 relative overflow-hidden">
                {/* Photo */}
                <div className="aspect-square overflow-hidden rounded-sm bg-muted">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Caption */}
                <p className="absolute bottom-4 left-0 right-0 text-center font-script text-lg text-foreground px-4">
                  {photo.caption}
                </p>

                {/* Hover heart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-sm rounded-lg"
                >
                  <Heart className="w-16 h-16 text-primary fill-primary" />
                </motion.div>
              </div>

              {/* Tape decoration */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-valentine-gold/60 rotate-2 shadow-sm" />
            </motion.div>
          ))}
        </div>

        {/* Hint for customization */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-8 text-muted-foreground text-sm font-romantic italic"
        >
          💡 Tip: Replace the placeholder images with your own photos in the code!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default PhotoGallery;
