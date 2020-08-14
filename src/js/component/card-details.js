import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Details({ name, eye_color, gender, birth_year, height, skin_color }) {
	return (
		<>
			<div className="p-5">
				<div className="d-flex flex-inline">
					<div className="m-3">
						<img src="https://picsum.photos/600/400" />
					</div>
					<div className="text-center">
						<h1>{name}</h1>
						<p className="m-3">
							{`Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Obcaecati veniam iusto quo non eveniet alias voluptate culpa 
                                corporis architecto iure repellendus, quis facere delectus magni!`}
						</p>
					</div>
				</div>
				<hr className="m-5 bg-danger" />
				<div className="d-flex justify-content-between container">
					<div className="text-danger text-center m-3">
						<p className="text-danger">
							<strong>Name</strong>
						</p>
						<p className="text-danger">{name}</p>
					</div>
					<div className="text-danger text-center m-3">
						<p className="text-danger">
							<strong>Birth Year</strong>
						</p>
						<p className="text-danger">{birth_year}</p>
					</div>
					<div className="text-danger text-center m-3">
						<p className="text-danger">
							<strong>Gender</strong>
						</p>
						<p className="text-danger">{gender}</p>
					</div>
					<div className="text-danger text-center m-3">
						<p className="text-danger">
							<strong>Height</strong>
						</p>
						<p className="text-danger">{height}</p>
					</div>
					<div className="text-danger text-center m-3">
						<p className="text-danger">
							<strong>Skin Color</strong>
						</p>
						<p className="text-danger">{skin_color}</p>
					</div>
					<div className="text-danger text-center m-3">
						<p className="text-danger">
							<strong>Eye Color</strong>
						</p>
						<p className="text-danger">{eye_color}</p>
					</div>
				</div>
			</div>
		</>
	);
}

Details.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	skin_color: PropTypes.string,
	birth_year: PropTypes.string,
	height: PropTypes.string
};
