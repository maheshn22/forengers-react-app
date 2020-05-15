import React from 'react';

import man1 from '../assets/man-1.png'
import woman1 from '../assets/woman-1.png'
import woman2 from '../assets/woman-2.png'

import ForengerHeadCard from './ForengerHeadCard'
import { Container,Row } from 'react-bootstrap';

class ForengerHeads extends React.Component {

	constructor(props) {
		super(props);
		this.handleCardClick = this.handleCardClick.bind(this);
		this.state= { 
			items: [
				{
					id: 0,
					title: "Jane",
					subtitle: "",
					imgSrc: woman1,
					about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					link: "",
					selected: false,
				},
				{
					id: 1,
					title: "John",
					subtitle: "",
					imgSrc: man1,
					about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					link: "",
					selected: false,
				},			
				{
					id: 2,
					title: "Janet",
					subtitle: " ",
					imgSrc: woman2,
					about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
			return <ForengerHeadCard item={item} click={e=>  this.handleCardClick(item.id,e)} key={item.id}/>
		})
	}

	render() {
		return(
			<div>
				<Container>
					<Row className="justify-content-around border-top">
						{this.makeItems(this.state.items)}
					</Row>
				</Container>
			</div>
		);
	}
}

export default ForengerHeads;