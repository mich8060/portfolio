import React, { useState } from 'react';
import './accordion.scss';

const Accordion = ({ label, children, showNumber }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="accordion-item">
            <div
                className={`accordion-title ${isActive ? 'active' : ''}`}
                onClick={toggleAccordion}
            >
                {/* Optionally display number */}
                {showNumber && <div className="accordion-number">1</div>}
                {/* Accordion label */}
                <div className="accordion-label">{label}</div>
                {/* Accordion icon */}
                <div className="accordion-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                    >
                        <path d={isActive ? 'M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z' : 'M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H13V4Z'} />
                    </svg>
                </div>
            </div>
            {/* Accordion content */}
            <div className={`accordion-content ${isActive ? 'active' : ''}`}>
            {children}
            </div>
        </div>
    );
};

export default Accordion;
