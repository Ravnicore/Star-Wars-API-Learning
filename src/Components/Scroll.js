import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{
			overflowY: 'auto', 
			height:'450px'
		}}>
			{props.children}
		</div>
	)
};

export default Scroll;