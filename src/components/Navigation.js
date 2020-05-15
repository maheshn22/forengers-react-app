import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Container,Navbar,Nav} from 'react-bootstrap'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import Gallery from '../pages/Gallery'

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Company Name",
			headerLinks: [
				{ title: "Home", path: "/" },
				{ title: "About", path: "/about" },
				{ title: "Contact", path: "/contact" },
			],
			home: {
				title: "The Best Home Page",
				subtitle: "Welcome!",
				data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
			},
			about: {
				title: "About Us"
			},
			contact: {
				title: "Get in touch with us!"
			},
			gallery: {
				title: "Gallery"
			}
		}
	}

	render() {
		return (
			<div>
				<Router> 
					<Container className="p-0" fluid={true}>

						<Navbar className="border-button sticky-top" bg="dark" variant="dark" expand="lg">
							<Link className="nav-link" to="/">The Best Site in the World</Link>
							<Navbar.Toggle aria-controls="navbar-toggle" />
							<Navbar.Collapse id="navbar-toggle">
								<Nav className="ml-auto">
									<Link className="nav-link" to="/">Home</Link>
									<Link className="nav-link" to="/about">About</Link>
									<Link className="nav-link" to="/contact">Contact</Link>
									<Link className="nav-link" to="/gallery">Gallery</Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>

						<Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} data={this.state.home.data}/>}/>
						<Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>}/>
						<Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>}/>
						<Route path="/gallery" exact render={() => <Gallery title={this.state.gallery.title}/>}/>
					</Container>
					
				</Router>	
			</div>
		)
	}
}

export default Navigation;