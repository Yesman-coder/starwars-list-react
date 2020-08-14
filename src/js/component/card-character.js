import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export function Character({ index, name, eye_color, gender, hair_color }) {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<div style={{ width: "18rem" }} className="m-4 card card">
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
					<Link
						// onClick={() => {
						// 	history.push(`/details/${index}`);
						// 	console.log(index);
						// }}
						className="btn btn-outline-primary"
						to={`/details/${index}`}>
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

Character.propTypes = {
	index: PropTypes.number,
	name: PropTypes.string,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string
};
