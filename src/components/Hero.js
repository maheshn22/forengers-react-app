import React from 'react'
import {Container,Row,Col,Jumbotron} from 'react-bootstrap'

function Hero(props) {
	return(
		<div>
			<Jumbotron className="jumbotron-fluid m-center justify-content-center bg-transparent p-0">
				<Container className="">
					<Row className=" ">
						<Col>
							{ props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
							{ props.subtitle && <h1 className="display-4 font-weight-light">{props.subtitle}</h1> }
							{ props.data && <h1 className="lead font-weight-light">{props.data}</h1> }
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</div>
	)
}

export default Hero;