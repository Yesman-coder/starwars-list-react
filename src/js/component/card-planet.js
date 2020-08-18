import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export function Planet({ index, name, terrain, population, climate }) {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<div style={{ width: "18rem" }} className="m-4 card card">
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
				<div className="card-footer d-flex justify-content-between">
					<Link className="btn btn-outline-primary" to={`/detailsplanets/${index}`}>
						Learn More
					</Link>
					<button onClick={e => actions.addFavorites(e, `${name}`)} className="btn btn-outline-warning">
						<i className="fa fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
}

Planet.propTypes = {
	index: PropTypes.number,
	name: PropTypes.string,
	terrain: PropTypes.string,
	climate: PropTypes.string,
	population: PropTypes.string
};
