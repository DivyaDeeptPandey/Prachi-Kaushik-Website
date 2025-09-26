import React from "react";
import { motion } from "framer-motion";

const MediaFilter = ({ activeFilter, setActiveFilter, navbarHeight }) => {
  const filters = [
    { id: "news", label: "News Room" },
    { id: "videos", label: "Video Gallery" },
    { id: "photos", label: "Photo Gallery" },
    { id: "stock", label: "Stock Images" },
  ];

  return (
    <div
      className="sticky bg-white z-30 py-4 border-b border-gray-200"
      style={{ top: navbarHeight }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full satoshi-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-secondary shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaFilter;
