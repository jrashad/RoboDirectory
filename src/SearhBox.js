import React from 'react';

const SearhBox = ( {searchChange} ) => {
	return (
		<div className='pa2 tc'>
			<input
				className='pa3 ba b--blue bg-lightest-blue' 
				type='search' 
				placeholder='search contacts' 
				onChange={searchChange}
				/>
		</div>
		);
	}

export default SearhBox;