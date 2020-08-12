import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Character({ name, eye_color, gender, hair_color }) {
	return (
		<div className="card" style={{ minHeight: "18rem", minWidth: "18rem" }}>
			<img className="card-img-top" src="https://picsum.photos/400/200" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title font-italic">{name}</h5>
				<p className="card-text">
					<b>Gender: </b>
					{gender}
				</p>
				<p className="card-text">
					<b>Eye Color: </b>
					{eye_color}
				</p>
				<p className="card-text">
					<b>Hair Color: </b>
					{hair_color}
				</p>
				<div className="card-footer d-flex justify-content-between">
					<Link className="btn btn-outline-primary" to="/details">
						Learn More
					</Link>
					<button className="btn btn-outline-warning">
						<i className="fa fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
}

Character.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string
};
