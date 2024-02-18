import React, { useState } from 'react';
import "./tabs.scss";

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-buttons">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            onClick={() => changeTab(index)}
            className={index === activeTab ? 'active' : ''}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

const TabPanel = ({ children }) => {
  return <>{children}</>;
};

export { Tab, TabPanel };
