import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Details } from "../component/card-details";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function DetailsPlanets() {
	const { store } = useContext(Context);
	const { idplanet } = useParams();

	return (
		<>
			{store.planets.map((newPlanet, index) => {
				if (index === parseInt(idplanet)) {
					return (
						<div className="p-5">
							<div className="d-flex flex-inline">
								<div className="m-3">
									<img src="https://picsum.photos/600/400" />
								</div>
								<div className="text-center">
									<h1>{newPlanet.name}</h1>
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
									<p className="text-danger">{newPlanet.name}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Terrain</strong>
									</p>
									<p className="text-danger">{newPlanet.terrain}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Climate</strong>
									</p>
									<p className="text-danger">{newPlanet.climate}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Population</strong>
									</p>
									<p className="text-danger">{newPlanet.population}</p>
								</div>
							</div>
						</div>
					);
				}
			})}
		</>
	);
}

DetailsPlanets.propTypes = {
	name: PropTypes.string,
	terrain: PropTypes.string,
	climate: PropTypes.string,
	population: PropTypes.string
};
