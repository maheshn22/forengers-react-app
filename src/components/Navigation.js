import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Container,Navbar,Nav} from 'react-bootstrap'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ContactPagee from '../pages/ContactPagee'
import Gallery from '../pages/Gallery'
import Timeline from '../pages/Timeline'
import logo from '../assets/logo.png'


class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Company Name",
			headerLinks: [
				{ title: "Home", path: "/" },
				{ title: "About", path: "/about" },
				{ title: "Contact", path: "/contact" },
				{ title: "Gallery", path: "/gallery" },
				{ title: "Timeline", path: "/timeline" },
				
			],
			home: {
				title: "Forengers",
				subtitle: "We root as we route",
				data1: "Forengers emerged out of a simple idea to plant one sapling per week. With this philosophy, we hosted an event on social media to invite anyone who was interested and saw a good turnout. And it has grown ever since, now we host cleanliness drives along with plantation campaigns. Each sapling we plant is tagged, covered with a shed of bamboo and cloth, watered 4 times a week and tracked for growth. We ensure that every sapling survives the next monsoon season so that it can survive the later stages on its own. Moreover, the garbage we collect is disposed to composting facilities or recycling centers based on the nature of waste ensuring minimum impact.",
				data2: "We want to shift the focus of masses from mere concern to action. A lot is being shared by people in classrooms, social media platforms, etc but we aim to provide our community a platform where they can actually make an impact."
			},
			about: {
				title: "About Us"
			},
			contact: {
				title: "Join Us!"
			},
			gallery: {
				title: "Gallery"
			},
			timeline: {
				title: "Timeline"
			},
			
		}
	}

	render() {
		return (
			<div>
				<Router> 
					<Container className="p-0" fluid={true}>

						<Navbar className="border-button sticky-top" bg="dark" variant="dark" expand="lg">
						<Navbar.Brand href="/">
						<img
							src= {logo}
							width="30"
							height="30"
							className="d-inline-block align-top "
							alt="React Bootstrap logo"
							href="#"
							
						/><span className="nav-link-brand">  Forengers</span>
						</Navbar.Brand>
							
							
							<Navbar.Toggle aria-controls="navbar-toggle" />
							<Navbar.Collapse id="navbar-toggle">
								<Nav className="ml-auto">
									<Link className="nav-link" to="/">Home</Link>
									<Link className="nav-link" to="/about">About</Link>
									<Link className="nav-link" to="/contact">Contact</Link>
									<Link className="nav-link" to="/gallery">Gallery</Link>
									<Link className="nav-link" to="/timeline">Timeline</Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>

						<Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} data1={this.state.home.data1} data2={this.state.home.data2}/>}/>
						<Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>}/>
						<Route path="/contact" exact render={() => <ContactPagee title={this.state.contact.title}/>}/>
						<Route path="/gallery" exact render={() => <Gallery title={this.state.gallery.title}/>}/>
						<Route path="/timeline" exact render={() => <Timeline title={this.state.timeline.title}/>}/>
					</Container>
					
				</Router>	
			</div>
		)
	}
}

export default Navigation;