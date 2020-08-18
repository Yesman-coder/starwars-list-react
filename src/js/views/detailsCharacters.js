import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Details } from "../component/card-details";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function DetailsChar() {
	const { store } = useContext(Context);
	const { idchar } = useParams();

	return (
		<>
			{store.people.map((newChar, index) => {
				if (index === parseInt(idchar)) {
					return (
						<div className="p-5">
							<div className="d-flex flex-inline">
								<div className="m-3">
									<img src="https://picsum.photos/600/400" />
								</div>
								<div className="text-center">
									<h1>{newChar.name}</h1>
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
									<p className="text-danger">{newChar.name}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Birth Year</strong>
									</p>
									<p className="text-danger">{newChar.birth_year}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Gender</strong>
									</p>
									<p className="text-danger">{newChar.gender}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Height</strong>
									</p>
									<p className="text-danger">{newChar.height}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Skin Color</strong>
									</p>
									<p className="text-danger">{newChar.skin_color}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Eye Color</strong>
									</p>
									<p className="text-danger">{newChar.eye_color}</p>
								</div>
							</div>
						</div>
					);
				}
			})}
		</>
	);
}

DetailsChar.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	skin_color: PropTypes.string,
	birth_year: PropTypes.string,
	height: PropTypes.string
};
