import React from 'react';

const Scroll=(props)=>{
	return(
		<div style={{overflowY:'scroll',border:'5px solid grey',height:'600px'}}>
			{props.children}
		</div>
		);
};

export default Scroll;