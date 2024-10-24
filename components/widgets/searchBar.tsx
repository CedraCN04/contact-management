import { motion } from "framer-motion";

interface SearchBarProps {
  viewSearch: boolean;
}

export default function SearchBar({ viewSearch }: SearchBarProps) {
  if (!viewSearch) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: viewSearch ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:mx-auto lg:w-2/5"
    >
      <input
        className="w-full p-2 rounded-md border border-gray-500"
        placeholder="Recherchez..."
      />
    </motion.div>
  );
}

