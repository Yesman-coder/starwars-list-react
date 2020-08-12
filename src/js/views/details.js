import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Details = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="jumbotron d-flex row">
				<img className="" src="https://picsum.photos/600/400" alt="Item Picture" />
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>
			</div>
		</div>
	);
};
