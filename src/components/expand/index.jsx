import React, { useState } from 'react';
import './expand.scss';

const ExpandableText = ({ label, children }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpansion = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="expand">
		{expanded && <div>{children}</div>}
			<label onClick={toggleExpansion} style={{ cursor: 'pointer' }}>
				{expanded ? 'Less Details' : 'More Details'}
			</label>
		</div>
	);
};

export default ExpandableText;
