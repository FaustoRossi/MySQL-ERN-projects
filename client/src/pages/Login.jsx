import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="auth">
			<h1>Login</h1>
			<form action="">
				<input type="text" placeholder="User" />
				<input type="password" placeholder="Password" />
				<button type="submit">Login</button>
				<p>It appears to be an error!</p>
				<span>
					Don't have an account? <Link to="/register">Register</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
