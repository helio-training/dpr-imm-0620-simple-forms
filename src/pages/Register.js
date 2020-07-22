import React from 'react';
import { Link } from 'react-router-dom'

function Register(props) {
    
    return (
        <fieldset>
            <button onClick={() => props.addUser({ name: "wes" })}>Add Wes</button>
            <form>
                <input
                    type="text"
                    placeholder="Username" />
                <input
                    type="text"
                    placeholder="Email" />
                <input
                    type="password"
                    placeholder="Password" />
                <input
                    type="password"
                    placeholder="Password Confirm" />
                <input
                    type="number"
                    min="13"
                    placeholder="Age" />
                <input
                    type="submit"
                    value="Register" />
            </form>
            <Link className="link" to="/login">Login</Link>
        </fieldset>
    );
}

export default Register;