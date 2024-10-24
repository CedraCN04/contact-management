"use client";

import SearchBar from "@/components/widgets/searchBar";
import { useState } from "react";
import { LuMenuSquare, LuSearch } from "react-icons/lu";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [viewSearch, setViewSearch] = useState(false);

  return (
    <header className="px-3 py-4 bg-slate-100 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-row items-center justify-between lg:w-4/5 lg:mx-auto">
        <div className="relative flex flex-row justify-between items-center gap-6 size-icon">
          <LuMenuSquare className="cursor-pointer" />
          <LuSearch
            className="cursor-pointer"
            onClick={() => setViewSearch(!viewSearch)}
          />
        </div>
        <h1>Contacts management</h1>
        <span className="text-xl p-2 rounded-full bg-gray-300">JD</span>
      </div>
      <AnimatePresence>
        {viewSearch && <SearchBar viewSearch={viewSearch} />}
      </AnimatePresence>
    </header>
  );
}

