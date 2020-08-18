import React, { useState, useEffect, useContext } from "react";
import { Character } from "../component/card-character";
import { Planet } from "../component/card-planet";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export function Home() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
	}, []);

	return (
		<>
			<h2 className="text-danger pt-5 pl-5">Characters</h2>
			<div className="">
				<div className="card-group-scroll card-group">
					{store.people.map((newChar, index) => {
						return (
							<Character
								key={index}
								index={index}
								name={newChar.name}
								eye_color={newChar.eye_color}
								hair_color={newChar.hair_color}
								gender={newChar.gender}
							/>
						);
					})}
				</div>
			</div>

			<h2 className="text-danger pt-5 pl-5">Planets</h2>
			<div className="">
				<div className="card-group-scroll card-group">
					{store.planets.map((newPlanet, index) => {
						return (
							<Planet
								key={index}
								index={index}
								name={newPlanet.name}
								terrain={newPlanet.terrain}
								climate={newPlanet.climate}
								population={newPlanet.population}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
