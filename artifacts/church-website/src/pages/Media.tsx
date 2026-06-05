import { motion } from "framer-motion";

export default function Media() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            A visual journal of life at AFM. Moments of worship, community, and beauty captured.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden bg-muted"
          >
            <img src="/images/hero-bg.png" alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden bg-muted"
          >
            <img src="/images/event-1.png" alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative group overflow-hidden bg-muted"
          >
            <img src="/images/sermon-1.png" alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-2 relative group overflow-hidden bg-muted"
          >
            <img src="/images/event-2.png" alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative group overflow-hidden bg-muted"
          >
            <img src="/images/ministry-1.png" alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative group overflow-hidden bg-muted"
          >
            <img src="/images/about-interior.png" alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="col-span-1 md:col-span-2 relative group overflow-hidden bg-muted"
          >
            <img src="/images/event-3.png" alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
