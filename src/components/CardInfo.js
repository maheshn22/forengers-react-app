import React from 'react';
import {useSpring, animated} from 'react-spring';


function CardInfo (props) {

	const style = useSpring({opacity: 1, from: {opacity: 0}});

	return(
		<div className="m-card-info" style={style}>
			<p className="m-card-title">{props.title}</p>
			<p className="m-card-sub-title">{props.subtitle}</p>
			<a href={props.link} target="_blank" rel="noopener noreferrer">Go to Page</a>
		</div>
	)
}

export default CardInfo;