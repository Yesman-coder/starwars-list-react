import React, { useState, useEffect } from "react";
import { Character } from "../component/card-character";
import { Planet } from "../component/card-planet";

export function Home() {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);

	const addFavorite = itemToAdd => {
		const newList = people.filter((newItem, index) => {
			return newItem == itemToAdd;
		});
		setListItems(newList);
	};

	useEffect(() => {
		async function getList() {
			const baseUrl = "https://swapi.dev/api/";
			const response = await fetch(`${baseUrl}people/`);
			const data = await response.json();
			setPeople(data.results);
		}
		getList();

		async function getPlanets() {
			const baseUrl = "https://swapi.dev/api/";
			const response = await fetch(`${baseUrl}planets/`);
			const data = await response.json();
			setPlanets(data.results);
		}
		getPlanets();
	}, []);

	return (
		<>
			<div>
				<h3 className="text-danger">Characters</h3>
			</div>

			<div className="d-flex justify-content-center align-items-center p-5 card-deck">
				{people.map((newChar, index) => {
					return (
						<Character
							onclick={event => addFavorite(newItem)}
							key={index}
							name={newChar.name}
							eye_color={newChar.eye_color}
							hair_color={newChar.hair_color}
							gender={newChar.gender}
						/>
					);
				})}
			</div>

			<div>
				<h3 className="text-danger">Planets</h3>
			</div>

			<div className="d-flex justify-content-center align-items-center p-5 card-deck">
				{planets.map((newPlanet, index) => {
					return (
						<Planet
							key={index}
							name={newPlanet.name}
							terrain={newPlanet.terrain}
							climate={newPlanet.climate}
							population={newPlanet.population}
						/>
					);
				})}
			</div>
		</>
	);
}
