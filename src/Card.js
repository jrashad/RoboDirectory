import React from 'react';

const Card = (props) => {
	const { name, email, id } = props;
	return (
		<div className='tc bg-light-blue dib grow br3 pa3 ma2 bw2 shadow-5' >
		 <img src={`http://robohash.org/${id}?200x200`} alt='robot' />
		   	<div>
		  		<h2>{name}</h2>
		  		<p>{email}</p>
			</div>		 
		 </div>
	);
}

export default Card