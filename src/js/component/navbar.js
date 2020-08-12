import React from "react";
import { Link } from "react-router-dom";
import imagen from "../../img/starwars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light" style={{ backgroundColor: "#999999" }}>
			<Link to="/">
				<img style={{ width: "100px", height: "100px" }} src={imagen} alt="Starwars Logo" />
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
