import React, { Component,useState, useEffect } from 'react';
import { db } from "./firebase";
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';

  /*const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        Firstname: fname,
        Telnum: telnum,
        Lastname: lname,
        Email: email,
        Contacttype: contype,
        Message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFname("");
    setContype("");
    setLname("");
    setTel("");
    setEmail("");
    setMessage("");
  }*/

class Contact extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        //console.log('Current State is: ' + JSON.stringify(this.state));
        //alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    db.collection("contacts")
      .add({
        Firstname: this.state.firstname,
        Telnum: this.state.telnum,
        Lastname: this.state.lastname,
        Email: this.state.email,
        Contacttype: this.state.contactType,
        Message: this.state.message,
      })
      .then(() => {
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
      });
      document.getElementById('firstname').value='';
      document.getElementById('lastname').value='';
      document.getElementById('email').value='';
      document.getElementById('telnum').value='';
      document.getElementById('message').value='';
   }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return (
            <div className="container">
                <div className="row row-content justify-content-center">
                    <div className="card col-12 col-md-9">
                        <h3 className="card-header card-head-contact text-white">Get in touch with us</h3>
                        <div class="card-body">
                            <div>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor="firstname" md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="firstname" name="firstname"
                                                placeholder="First Name" 
                                                value={this.state.firstname}
                                                valid={errors.firstname === ''}
                                                invalid={errors.firstname !== ''}
                                                onBlur={this.handleBlur('firstname')}
                                                onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.firstname}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="lastname" md={2}>Last Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="lastname" name="lastname"
                                                placeholder="Last Name"
                                                value={this.state.lastname}
                                                valid={errors.lastname === ''}
                                                invalid={errors.lastname !== ''}
                                                onBlur={this.handleBlur('lastname')}
                                                onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.lastname}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                        <Col md={10}>
                                            <Input type="tel" id="telnum" name="telnum"
                                                placeholder="Tel. Number"
                                                value={this.state.telnum}
                                                valid={errors.telnum === ''}
                                                invalid={errors.telnum !== ''}
                                                onBlur={this.handleBlur('telnum')}
                                                onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.telnum}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                            <Input type="email" id="email" name="email"
                                                placeholder="Email"
                                                value={this.state.email}
                                                valid={errors.email === ''}
                                                invalid={errors.email !== ''}
                                                onBlur={this.handleBlur('email')}
                                                onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.email}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{ size: 6, offset: 2 }}>
                                            <FormGroup>
                                                <Label>
                                                    <strong>How do we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={{ size: 3, offset: 1 }}>
                                            <Input type="select" name="contactType"
                                                value={this.state.contactType}
                                                onChange={this.handleInputChange}>
                                                <option>Tel.</option>
                                                <option>Email</option>
                                                <option>Both</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="message" md={2}>Your Message</Label>
                                        <Col md={10}>
                                            <Input type="textarea" id="message" name="message"
                                                rows="4"
                                                value={this.state.message}
                                                onChange={this.handleInputChange}></Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{ size: 10, offset: 2 }}>
                                            <Button type="submit" className="card-head-contact">
                                                Submit
                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact