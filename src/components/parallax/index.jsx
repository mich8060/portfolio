import React, { useRef } from 'react';
import './parallax.scss';

const Parallax = ({ lead, title, content }) => {
    const cardRef = useRef(null);

    const handleTouchStart = () => {
        cardRef.current.classList.toggle('hover');
    };

    const handleBlur = () => {
        cardRef.current.blur();
    };

    return (
      <div className="parallax">
            <div 
                className="parallax--card" 
                onTouchStart={handleTouchStart} 
                onBlur={handleBlur} 
                tabIndex="0" 
                ref={cardRef}
            >
                <div className="parallax--container">
                    <div className="parallax--front">
                        <div className="parallax--inner">
                            <p>{title}</p>
                            <span>{lead}</span>
                        </div>
                        <div className="parallax--icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.76308 9.58507C5.00957 6.178 8.10281 3.81818 11.6639 3.81818C14.7801 3.81818 17.5331 5.62567 19.0132 8.36363H14.7273C14.2252 8.36363 13.8182 8.77064 13.8182 9.27272C13.8182 9.7748 14.2252 10.1818 14.7273 10.1818H20.3974C20.4114 10.1821 20.4255 10.1821 20.4396 10.1818H21.0909C21.593 10.1818 22 9.7748 22 9.27272V2.90909C22 2.40701 21.593 2 21.0909 2C20.5888 2 20.1818 2.40701 20.1818 2.90909V6.7719C18.3341 3.90483 15.2244 2 11.6639 2C7.26131 2 3.53637 4.9129 2.05559 8.96037C1.88309 9.43188 2.12548 9.95396 2.59699 10.1265C3.0685 10.299 3.59058 10.0566 3.76308 9.58507ZM2 14.7272C2 14.2252 2.40701 13.8182 2.90909 13.8182H3.56168C3.57538 13.8178 3.58905 13.8178 3.60268 13.8182H9.27272C9.7748 13.8182 10.1818 14.2252 10.1818 14.7272C10.1818 15.2293 9.7748 15.6363 9.27272 15.6363H4.98745C6.46763 18.3743 9.22062 20.1818 12.3368 20.1818C15.8979 20.1818 18.9911 17.822 20.2376 14.4149C20.4101 13.9434 20.9322 13.701 21.4037 13.8735C21.8752 14.046 22.1176 14.5681 21.9451 15.0396C20.4643 19.0871 16.7394 22 12.3368 22C8.77583 22 5.66576 20.0946 3.81818 17.227V21.0909C3.81818 21.5929 3.41117 22 2.90909 22C2.40701 22 2 21.5929 2 21.0909V14.7272Z" fill="#9CA2AE"/>
                            </svg>
                        </div>
                    </div>
                    <div className="parallax--back">
                        <div className="parallax--inner">
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Parallax;


