import { motion, AnimatePresence } from "framer-motion";
import { site } from "../data/site";

export default function LoadingScreen({ finished }) {
  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="font-heading text-2xl md:text-3xl font-semibold"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {site.name}
          </motion.div>
          <motion.div
            className="mt-6 h-0.5 w-32 bg-border overflow-hidden rounded-full"
          >
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </motion.div>
          <p className="mt-4 text-sm text-muted font-mono">Loading portfolio</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
