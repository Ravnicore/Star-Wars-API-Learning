import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{
			overflowY: 'auto', 
			height:'calc(100vh - 200px)'
		}}>
			{props.children}
		</div>
	)
};

export default Scroll;