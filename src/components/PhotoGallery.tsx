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
    src: "https://lh3.googleusercontent.com/pw/AP1GczNKiEo-TknJRGCDx12hBblAh9FeiiIXM-59M54Xrw41ahNWBY-y8xesQ5iIMbmshWThdi81SN0q6FQDbScsR4rpUFApI8o1yMSbpXYQXENuyq_OMCww=w2400",
    caption: "Our first photo together☺️",
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/pw/AP1GczP5gb-7LrYNEQZPXlob7GuShEak7u4GPC-hV06bcMeO9avnW4w8qjKpfNThODJ3op97F9wQ_cTNEJeaZr3_1eDc7fU5K5BFj1ydQbAj_Xorjt4zUy0e=w2400",
    caption: "Our first trip together🏔️",
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/pw/AP1GczMCknGE6gB93IjBV1iPdfoCASGkhcDyQCdVV1FeqwBhZYg1O74NQJ5RIYMO-h6ihG_P5e0VOBh3pP3pRJbXoo8bkJqHL6LoRKY5Ayi4u3k--Prd_lww=w2400",
    caption: "We are Engaged❤️",
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/pw/AP1GczO7-CZEuGvQ6c_90xw1H6K6lFMLiGRk3oCXraHtmHSr4CIGl--SQWaQFHf8KFaTmMjUoXh18yDeNHjlVHO18L7UbI3J_-gBMNZT4eR5rF6t0AUDY6L4=w2400",
    caption: "Our first Navratri💃🏻🕺🏻",
  },
  {
    id: 5,
    src: "https://lh3.googleusercontent.com/pw/AP1GczNIWGe77-2DNGPRhsenXd2kM2PgPgY2NnzgBI6LrCqJIyZ0vQiSCcXj7fPN_e_bOtQPXML44YLb1r7EbHTg8tmkAhkXVd-r8fDJBU1Sf9h7e6nHGiY9=w2400",
    caption: "My favorite place is next to you💕",
  },
  {
    id: 6,
    src: "https://lh3.googleusercontent.com/pw/AP1GczNIvWbgd2wgbPXhGLMCAkioAZ03mQMW-ZjT-U1jvXn7wBHMEvTTjXtHvE1m7zuHqEaOHskSSjyebduAkN_SqxakNlfWftlk0SeQ1ELfYhhtwv6xDoZg=w2400",
    caption: "Forever and always♾️",
  },
  {
    id: 7,
    src: "https://lh3.googleusercontent.com/pw/AP1GczPZDNeF9ljKjAfwpFyaG5820qFwqEVDUyWka1f4OSGMc-FbX-ODRfdn0JiPsk6lE0S6c00h2nAkSCe1-6noYEeQmbCMfvjZXG44tOxPnJDvzeg4Kxjv=w2400",
    caption: "I love you Foram❤️",
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

        </motion.p>
      </div>
    </motion.section>
  );
};

export default PhotoGallery;
