import React, { useState } from "react";
import { motion } from "framer-motion";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabs-container">
      <Tab isActive={activeTab === 1} onClick={() => handleTabClick(1)}>
        Tab 1
      </Tab>
      <Tab isActive={activeTab === 2} onClick={() => handleTabClick(2)}>
        Tab 2
      </Tab>
      <Tab isActive={activeTab === 3} onClick={() => handleTabClick(3)}>
        Tab 3
      </Tab>
    </div>
  );
};

export default Tabs;

const Tab = ({ isActive, onClick, children }) => {
  return (
    <motion.div
      className="tab"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
      {isActive && (
        <motion.div
          className="indicator"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};
