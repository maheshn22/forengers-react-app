import React from 'react'
import {Container, Row , Col}from 'react-bootstrap'


 function Footer() {
	return (
		<div className="main-footer">
		<hr></hr>
			<Container className="footer-container text-center " fluid>
				
				<Row className="footer-up">
					<Col>
						<h4>Page Info</h4>
						<ul className="list-unstyled">
							<li>About Us</li>
							<li>Contact Us</li>
							<li>Gallery</li>
						</ul>
					</Col>
					<Col>
						<h4>Address</h4>
						<ul className="list-unstyled">
							<li>Office 12</li>
							<li>Grimmauld Place</li>
							<li>London</li>
						</ul>
					</Col>
				</Row>
				
				<Row  className="footer-up">
				
					&copy; {new Date().getFullYear()} 		|		The Best Site in the World		|		All Rights Reserved 	 
				
				</Row>
			</Container>			
		</div>
	)
}
export default Footer;
