import React from 'react'
import {Container, Row , Col}from 'react-bootstrap'


 function Footer() {
	return (
		<div className="main-footer">
		
			<Container className="footer-container m-center" fluid>
				
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
				
				<p md={12} className="footer-bottom m-center">
				
					&copy; {new Date().getFullYear()} 		|		Forengers		|		All Rights Reserved 	 
				
				</p>
			</Container>			
		</div>
	)
}
export default Footer;
