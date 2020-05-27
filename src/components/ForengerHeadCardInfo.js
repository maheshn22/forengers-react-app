import React from 'react';
import {useSpring, animated} from 'react-spring';


function ForengerHeadCardInfo (props) {

	const style = useSpring({opacity: 1, from: {opacity: 0}});

	return(
		<animated.div className="m-card-info" style={style}>
			<p className="m-card-title m-center">{props.title}</p>
			<p className="m-card-sub-title m-center">{props.subtitle}</p>
			<p className="m-card-about m-center"><b>{props.about}</b></p>
			
			
		</animated.div>
	)
}

export default ForengerHeadCardInfo;