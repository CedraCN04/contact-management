import { motion } from "framer-motion";
import { Input } from "../ui/input";

interface SearchBarProps {
  viewSearch: boolean;
}

export default function SearchBar({ viewSearch }: SearchBarProps) {
  if (!viewSearch) return null;
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: viewSearch ? "100%" : 0, opacity: viewSearch ? 1 : 0 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:mx-auto"
    >
      <Input
        className="w-full p-2 rounded-md border border-gray-500 lg:w-2/5 lg:mx-auto"
        placeholder="Recherchez..."
      />
    </motion.div>
  );
}

