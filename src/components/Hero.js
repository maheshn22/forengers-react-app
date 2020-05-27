import React from 'react'
import {Container,Row,Col,Jumbotron} from 'react-bootstrap'

function Hero(props) {
	return(
		<div>
			<Jumbotron className="jumbotron-fluid m-center justify-content-center bg-transparent p-0">
				<Container className="">
					<Row className=" ">
						<Col>
							{ props.title && <h1 className="lead display-3 font-weight hero-title">{props.title}</h1> }
							{ props.subtitle && <h1 className="lead display-4 font-weight- hero-title">{props.subtitle}</h1> }
							{ props.data1 && <h1 className="font-weight-light">{props.data1}</h1> }
							{ props.data2 && <h1 className=" font-weight-light">{props.data2}</h1> }
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</div>
	)
}

export default Hero;