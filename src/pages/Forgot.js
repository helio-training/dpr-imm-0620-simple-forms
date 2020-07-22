import React from 'react';
import { Link } from 'react-router-dom'

function Forgot() {
    return (
        <fieldset>
            <form>
                <input
                    type="text"
                    placeholder="Email" />
                <input
                    type="submit"
                    value="Send Reset" />
            </form>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/register">Register</Link>
        </fieldset>
    );
}

export default Forgot;