import React from 'react';

import plantation01 from '../assets/plantation01.webp'
import paperbag01 from '../assets/paperbag01.webp'

import Card from './Card'
import { Container,Row } from 'react-bootstrap';

class Carousel extends React.Component {

	constructor(props) {
		super(props);
		this.handleCardClick = this.handleCardClick.bind(this);
		this.state= { 
			items: [
				{
					id: 0,
					title: "Plantation",
					subtitle: "",
					imgSrc: [plantation01],
					link: "",
					selected: false,
				},
				{
					id: 1,
					title: "Cleanliness",
					subtitle: "",
					imgSrc: plantation01,
					link: "",
					selected: false,
				},			
				{
					id: 2,
					title: "Paperbag",
					subtitle: " ",
					imgSrc: paperbag01,
					link: "",
					selected: false,
				},
			]
		}

	}

	handleCardClick = (id) => {
		let items = [...this.state.items];

		items[id].selected = items[id].selected ? false : true;

		items.forEach(item => {
			if(item.id !== id) {
				item.selected = false;
			}
		})
		
		this.setState({
			items
		});
	}

	makeItems = (items) => {
		return items.map(item => { 
			return <Card item={item} click={e=>  this.handleCardClick(item.id,e)} key={item.id}/>
		})
	}

	render() {
		return(
			<div>
				<Container fluid={true}>
					<Row className="justify-content-around border-top">
						{this.makeItems(this.state.items)}
					</Row>
				</Container>
			</div>
		);
	}
}

export default Carousel;