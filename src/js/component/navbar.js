import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light" style={{ backgroundColor: "#999999" }}>
			<Link to="/">
				<img
					style={({ width: "100px" }, { height: "100px" })}
					src="https://d95f3f93-3b44-4169-adc3-4fcf174de086.ws-us02.gitpod.io/files/download/?id=b5d43903-951a-4342-a841-9cd3d5e695a7"
					alt="Starwars Logo"
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/home">
					<button className="btn btn-outline-warning">
						Favorites
						<span className="badge badge-light">9</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};
