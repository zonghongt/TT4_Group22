import React, { Component, useState } from 'react';
import { Button } from '@material-ui/core';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Container } from 'react-bootstrap';
import { LoginPanel, DbsLogo, LoginWrapper } from './styles';
import DBSImage from '../images/dbs-logo.png';
import Popup from 'reactjs-popup';

const Login = (props) => {

    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
            method: 'POST',//POST method
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'//token key
            },
            body: JSON.stringify({// body data type must match username and password
                userName: props?.mystate?.username,
                userPass: props?.mystate?.password,
            })
        })//if successful fetch and it match body match username and password
            .then(response => response.text())
            .then(data => {
                try {
                    var responseJson = JSON.parse(data);
                    console.log("responseJson", responseJson);
                    //console.log(props);
                    props.handleAccountInfo(responseJson);
                    console.log(props);
                    props.history.push('/Mainpage');
                }
                catch (e) {
                    console.log(e)
                }
            });
    };




    
    return (
        <LoginWrapper>
            <DbsLogo src={DBSImage} />
            <LoginPanel>
                
                <Container data-aos="fade-in"> {/* for the defualt padding and align content */}
                    <Form onSubmit={handleSubmit}>

                        <h3>Log in</h3>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Username" onChange={props?.handleUsername} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" placeholder="Password" onChange={props?.handlePassword} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button color='primary' type="submit">Sign in</Button>
                            </Col>
                        </Form.Group>

                    </Form>
                </Container>
            </LoginPanel>
        </LoginWrapper>
    )
    
}

export default Login;