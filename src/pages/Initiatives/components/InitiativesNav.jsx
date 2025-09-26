import React from "react";

const StickyNav = ({ sections, activeSection }) => {
  // Check if the active section is the last one (get-involved)
  const isLastSectionActive = activeSection === "get-involved";

  return (
    <nav className="hidden lg:block fixed top-1/2 right-4 lg:right-8 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-end space-y-4 bg-white backdrop-blur-2xs shadow-lg p-3 rounded-xl">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isLastSection = section.id === "get-involved";

          // Determine text color based on active state and section background
          let textColorClass;
          if (isActive && isLastSection) {
            textColorClass = "text-secondary"; // Active + last section
          } else if (isActive) {
            textColorClass = "text-primary"; // Active normal
          } else if (isLastSectionActive) {
            textColorClass = "text-white/60 hover:text-white"; // Dim white
          } else {
            textColorClass = "text-gray-400 hover:text-gray-600"; // Default gray
          }

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center justify-end satoshi-medium transition-all duration-300 ${
                isActive ? "text-lg" : "text-sm"
              } ${textColorClass}`}
            >
              <span className="mr-2">{section.name}</span>
              <div
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? isLastSection
                      ? "w-8 bg-secondary"
                      : "w-8 bg-primary"
                    : isLastSectionActive
                    ? "w-4 bg-secondary"
                    : "w-4 bg-gray-300"
                }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default StickyNav;
