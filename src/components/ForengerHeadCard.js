import React from 'react';
import ForengerHeadCardInfo from '../components/ForengerHeadCardInfo'

function ForengerHeadCard(props) {
	return(
		<div className="d-inline-block m-card col-lg-3" onClick={(e) => props.click(props.item) } >
			<img className="m-forenger-card-image" src={props.item.imgSrc} alt={props.item.title}></img>
			{ <ForengerHeadCardInfo title={props.item.title} subtitle={props.item.subtitle} about={props.item.about} link={props.item.link}  /> }
		</div>
	)
}

export default ForengerHeadCard;