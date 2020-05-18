import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Container,Navbar,Nav} from 'react-bootstrap'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
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
				title: "Towards the betterment of Humanity",
				subtitle: "Forengers",
				data1: "Forengers emerged out of a simple idea to plant one sapling per week. With this philosophy, we hosted an event on social media to invite anyone who was interested and saw a good turnout. And it has grown ever since, now we host cleanliness drives along with plantation campaigns. Each sapling we plant is tagged, covered with a shed of bamboo and cloth, watered 4 times a week and tracked for growth. We ensure that every sapling survives the next monsoon season so that it can survive the later stages on its own. Moreover, the garbage we collect is disposed to composting facilities or recycling centers based on the nature of waste ensuring minimum impact.",
				data2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
			},
			about: {
				title: "About Us"
			},
			contact: {
				title: "Get in touch with us!"
			},
			gallery: {
				title: "Gallery"
			},
			timeline: {
				title: "Timeline"
			}
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
							className="d-inline-block align-top"
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
						<Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>}/>
						<Route path="/gallery" exact render={() => <Gallery title={this.state.gallery.title}/>}/>
						<Route path="/timeline" exact render={() => <Timeline title={this.state.timeline.title}/>}/>
					</Container>
					
				</Router>	
			</div>
		)
	}
}

export default Navigation;