import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Bibesh Manandhar. All rights reserved.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            Built with{" "}
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />{" "}
            using React & Tailwind
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;