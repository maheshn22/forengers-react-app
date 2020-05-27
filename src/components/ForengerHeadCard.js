import React from 'react';
import ForengerHeadCardInfo from '../components/ForengerHeadCardInfo'

function ForengerHeadCard(props) {
	return(
		<div className="m-card col-lg-3 card-bg" onClick={(e) => props.click(props.item) } >
		<div className="pdtop">
			<img className="m-forenger-card-image" src={props.item.imgSrc} alt={props.item.title}></img>
		</div>
			{ <ForengerHeadCardInfo title={props.item.title} subtitle={props.item.subtitle} about={props.item.about} link={props.item.link}  /> }
		</div>
	)
}

export default ForengerHeadCard;