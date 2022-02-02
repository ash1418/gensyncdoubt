import React from "react";
import LoginCard from "../Components/LoginComponents/LoginCard";
import "../Styles/page-styles/login.css";

const Login = () => {
	return (
		<div className="container">
			<LoginCard page="login" heading="Login" />
		</div>
	);
};

export default Login;
