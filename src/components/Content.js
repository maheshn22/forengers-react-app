import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'

function Content(props) {
	return (
		<Container>
			<Row className="m-center">
				<Col md={12}>
					{props.children}
				</Col>
			</Row>
		</Container>
	)
}

export default Content;
