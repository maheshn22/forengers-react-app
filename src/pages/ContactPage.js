import React from 'react'
import Hero from '../components/Hero';
import Content from '../components/Content';

import {Form,Button,Col,Row} from 'react-bootstrap'
import Axios from 'axios';

class ContactPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			phone: "",
			age: "",
			area: "",
			message: "",
			disabled: false,
			emailSent: null,
		}
	}

handleChange = (e) => {
	const target = e.target;
	const value = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;

	this.setState({
		[name]: value
	})
}

handleSubmit = (e) => {
	e.preventDefault();

	this.setState({
		disabled: true,
		emailSent: true,
	});

	Axios.post('/api/email',this.state)
		.then(res=> {
			if(res.data.success) {
				this.setState({
					disabled: false,
					emailSent: true
				})
			} else {
				this.setState({
					disabled: false,
					emailSent: false
				})
			}
		})
		.catch(err => {
			this.setState({
				disabled: false,
				emailSent: false
			})
		})
}


	render() {
		return (
			<div className="contact-page page ">
				<Hero title={this.props.title} />

				<Content className="">
				<div className="card-bg">
				<br/>
					<Form onSubmit={this.handleSubmit} className="m-lef">
						 <Form.Group as={Row}>
							 <Form.Label  column col-sm-2 sm="2" align="m-center" htmlFor="full-name">Full Name</Form.Label>
							 <Col sm="10">
							 <Form.Control required id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
							 </Col>
						 </Form.Group>

						 <Form.Group as={Row}>
							 <Form.Label column col-sm-2 sm="2" htmlFor="age">Age</Form.Label>
							 <Col sm="10">
							 <Form.Control required id="age" name="age" type="number" value={this.state.age} onChange={this.handleChange}/>
							 </Col>
						 </Form.Group>
						 
						 <Form.Group as={Row}>
							 <Form.Label column col-sm-2 sm="2" htmlFor="email">Email</Form.Label>
							 <Col sm="10">
							 <Form.Control required id="email" name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
							 </Col>
						 </Form.Group>

						 <Form.Group as={Row}>
							 <Form.Label column col-sm-2 sm="2" htmlFor="phone">Phone Number</Form.Label>
							 <Col sm="10">
							 <Form.Control id="phone" name="phone" type="number" value={this.state.phone} onChange={this.handleChange}/>
							 </Col>
						 </Form.Group>
						 
						 <Form.Group as={Row}>
							 <Form.Label column col-sm-2 sm="2" htmlFor="area">Area</Form.Label>
							 <Col sm="10">
							 <Form.Control required id="area" name="area" type="text" value={this.state.area} onChange={this.handleChange}/>
							 </Col>
						 </Form.Group>
						 
						 
						 <Form.Group as={Row}>
							 <Form.Label column col-sm-2 sm="2" htmlFor="message">Any Comments</Form.Label>
							 <Col sm="10">
							 <Form.Control id="message" name="message" type="textarea" value={this.state.message} onChange={this.handleChange}/>
							 </Col>
						 </Form.Group>

						 

							<Button className="d-inline-block" variant="primary" type="submit" disable={this.state.disabled}>
								Send
							</Button>

							 {this.state.emailSent ===true && <p className="d-inline success-msg">Form Successfully Submitted!</p>}
							 {this.state.emailSent ===false && <p className="d-inline err-msg">Form Not Submitted.</p>}

					</Form>
					</div>
					
				</Content>

				
				<br/>

			</div>
		)
	}
	
}
export default  ContactPage;
