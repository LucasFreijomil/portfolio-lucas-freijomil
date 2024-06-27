import React from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface TabProps {
    active: any;
    selectTab: any;
    children: any
  }

export const TabButton = ({ active, selectTab, children }: TabProps) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      
    </button>
  );
};