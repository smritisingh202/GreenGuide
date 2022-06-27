import React from 'react';

const Searchbar=({searchfield,searchChange})=>{

	return(
		<div className='pa2'>
			<input
				type='search'
				placeholder='Search by plant name'
				onChange={searchChange}
			/>
		</div>
		);
}

export default Searchbar;