// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import Hero from '../components/Hero';
import Content from '../components/Content';

import {Form,Button,Col,Row} from 'react-bootstrap'

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
			email: "",
			phone: "",
			age: "",
			occupation: "",
			message: "",
      status: ""
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    })
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contact-page page m-center">
      <Hero title={this.props.title} />
      <div className="contact-form">
      <Form
      onSubmit={this.handleSubmit}
      action="https://formspree.io/mrgyppjj"
      method="POST"
      className="m-lef">
        <Form.Group as={Row}>
          <Form.Label htmlFor="full-name">Full Name</Form.Label>
          
          <Form.Control required id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
          
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label  htmlFor="age">Age</Form.Label>
          
          <Form.Control required id="age" name="age" type="number" value={this.state.age} onChange={this.handleChange}/>
          
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label htmlFor="email">Email</Form.Label>
          
          <Form.Control required id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
          
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label htmlFor="phone">Phone</Form.Label>
          
          <Form.Control id="phone" name="phone" type="tel" value={this.state.phone} onChange={this.handleChange}/>
          
        </Form.Group>


        <Form.Group as={Row}>
          <Form.Label htmlFor="area">Area</Form.Label>
         
          <Form.Control required  id="area" name="area" type="text" value={this.state.area} onChange={this.handleChange}/>
          
        </Form.Group>
        
        <Form.Group as={Row}>
          <Form.Label  htmlFor="message">Any Comments</Form.Label>
          
          <Form.Control id="message" name="message" type="textarea" value={this.state.message} onChange={this.handleChange}/>
          
        </Form.Group>

        

         <Button className="d-inline-block" variant="primary" type="submit" disable={this.state.disabled}>
           Send
         </Button>
          {status === "SUCCESS" && <p className="d-inline success-msg">Form Successfully Submitted!</p> }
          {status === "ERROR" && <p className="d-inline err-msg">Form Not Submitted.</p>}
        </Form>
        </div>
      </div>
    );
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default ContactPage;