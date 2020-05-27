import React from 'react';

import man1 from '../assets/man-1.png'
//import woman1 from '../assets/woman-1.png'
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
					title: "Neil Gokhale",
					subtitle: "",
					imgSrc: man1,
					about: "Forengers is like a mission for me. Through these weekly drives, I hope to do my bit against the climate change crisis. Working from one event to other, I have learned more about the planet than classrooms could ever teach me. Moreover, the satisfaction after planting saplings and seeing them grow is something which cannot be expressed in words. I want this to become a movement to save our planet from imminent danger of climate change.",
					link: "",
					selected: false,
				},
				{
					id: 1,
					title: "Riya Ambedkar",
					subtitle: "",
					imgSrc: woman2,
					about: "When asked the question: What is our duty towards Mother Nature? I believe most of us have an answer ready. But the real question is: Are we doing enough? Forengers was born when some of us realised that waiting for somebody else to bring about a change is worthless. We call her Mother Earth for a reason. Here at Forengers we make sure that she gets all the love, respect and care she deserves. What nature taught me was definitely what I would like to call “beyond the scope of books”.",
					link: "",
					selected: false,
				},			
				{
					id: 2,
					title: "Devansh Sharma",
					subtitle: " ",
					imgSrc: man1,
					about: "Forengers is my place of peace! Being there from Day 1 from the first drive ever makes it a little special and has a permanent place in my heart. I joined Forengers as I felt the need to bring about a change and I felt the need to do something different as it's high time now that we cared about the environment. The fact that we can have fun, enjoy ourselves and make genuine sizeable contribution towards helping the environment makes me feel happy and satisfied. We strive to bring about a change in people's actions, mentality and vision, and I personally feel that's the least we could do for the environment, and ultimately for ourselves!",
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
				<Container fluid={true}>
				<h2 className="m-center display-4 border-top">Our Heads</h2>
					<Row className="justify-content-center lead ">
						{this.makeItems(this.state.items)}
					</Row>
				</Container>
			</div>
		);
	}
}

export default ForengerHeads;