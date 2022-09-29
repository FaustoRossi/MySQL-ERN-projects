import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="auth">
			<h1>Login</h1>
			<form action="">
				<input type="text" placeholder="User" />
				<input type="email" required placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Login</button>
				<p>It appears to be an error!</p>
				<span>
					Already have an account? <Link to="/login">Login</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
