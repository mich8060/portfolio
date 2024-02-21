import React from 'react';
import './parallax.scss';

const Parallax = ({ lead, title, content }) => {
    return (
      <div className="parallax">
            <div className="parallax--card" onTouchStart="this.classList.toggle('hover')">
                <div className="parallax--container">
                    <div className="parallax--front">
                        <div className="parallax--inner">
                            <p>{title}</p>
                            <span>{lead}</span>
                        </div>
                        <div className="parallax--icon">
                            more
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.10033 13.0526L17.9051 13.0526L13.587 16.8538C13.1202 17.254 13.0869 17.9542 13.487 18.421C13.8871 18.8711 14.5874 18.9212 15.0542 18.521L21.6229 12.7358C22.0898 12.3357 22.1231 11.6355 21.723 11.1687C21.6563 11.0853 21.573 11.0353 21.4896 10.9686L15.0208 5.28345C14.8041 5.10005 14.554 5 14.2873 5C13.9872 5 13.6704 5.13339 13.4537 5.38347C13.0535 5.85029 13.0869 6.55052 13.5537 6.95065L17.9718 10.8352L3.10033 10.8352C2.48347 10.8352 2 11.3354 2 11.9356C2 12.5358 2.50014 13.0359 3.10033 13.0359L3.10033 13.0526Z" fill="black"/>
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

