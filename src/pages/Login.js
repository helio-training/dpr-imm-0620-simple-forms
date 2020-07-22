import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        console.log(event.target);
        this.setState(
            { 
                [event.target.name]: event.target.value 
            }
        );
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <fieldset>
                <form onSubmit={this.handleSubmit}>
                    <input name="email"
                        type="text"
                        placeholder="Email" 
                        value={this.state.email}
                        onChange={this.handleChange}/>
                    <input
                        type="password"
                        placeholder="Password" />
                    <input
                        type="submit"
                        value="Login" />
                </form>
                <Link className="link" to="/forgot">Forgot Password</Link>
                <Link className="link" to="/register">Register</Link>
            </fieldset>
        );
    }
}