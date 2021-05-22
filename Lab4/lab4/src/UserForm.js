import {Form, Button} from 'react-bootstrap'
import './App.css';
import React from 'react';

export class UserForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        fetch(`http://localhost:8000/api/players`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then((response) => response.json())
            .then((data) => {
                alert(data['message'])
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render () {
        return (
            <Form onSubmit={this.mySubmitHandler}>
                <TextInput onChangeHandler={this.myChangeHandler} title="Username"/>
                <TextInput onChangeHandler={this.myChangeHandler} title="Password"/>
                <div className= "text-center">
                    <Button variant="secondary" type="submit">Submit</Button>
                </div>
            </Form>
        )
    }
}

function TextInput({title, onChangeHandler}){
    const name = title.toLowerCase();
    return (
        <Form.Group>
            <Form.Label>{ title }</Form.Label>
            <Form.Control name={name} onChange={onChangeHandler} type="text" placeholder={`Enter the ${title.toLowerCase()}`} />
        </Form.Group>
    )
}
