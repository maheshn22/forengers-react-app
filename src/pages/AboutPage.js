import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'
import { Container } from 'react-bootstrap'
import ForengerHeads from '../components/ForengerHeads'




function AboutPage(props) {
	return (
		<div className="about-page page lead " >
			<Hero title={props.title} />
			<Container fluid={true}>
			<Content>
				<p className="m-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
				</p>
				<h2 className="m-center">Our Heads</h2>
			</Content>
			
			<ForengerHeads />
			</Container>

			
		</div>
	)
}
export default  AboutPage;
