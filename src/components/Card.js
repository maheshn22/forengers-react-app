import React from 'react';
import CardInfo from '../components/CardInfo'

function Card(props) {
	return(
		<div className="d-inline-block m-card col-lg-3.5" onClick={(e) => props.click(props.item) } >
			<img className="m-card-image" src={props.item.imgSrc} alt={props.item.title}></img>
			{ <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} /> }
		</div>
	)
}

export default Card;