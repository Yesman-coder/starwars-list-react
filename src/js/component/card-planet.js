import React from "react";
import PropTypes from "prop-types";

export function Planet({ name, terrain, population, climate }) {
	return (
		<div className="card" style={{ minHeight: "18rem", minWidth: "18rem" }}>
			<img className="card-img-top" src="https://picsum.photos/400/200" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title font-italic">{name}</h5>
				<p className="card-text">
					<b>Terrain: </b>
					{terrain}
				</p>
				<p className="card-text">
					<b>Climate: </b>
					{climate}
				</p>
				<p className="card-text">
					<b>Population: </b>
					{population}
				</p>
				<div className="card-footer">
					<a href="#" className="btn btn-outline-primary">
						Learn More!
					</a>
					<button className="btn btn-outline-warning">
						<i className="fa fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
}

Planet.propTypes = {
	name: PropTypes.string,
	terrain: PropTypes.string,
	climate: PropTypes.string,
	population: PropTypes.string
};
