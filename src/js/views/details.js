import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Details } from "../component/card-details";

export function DetailsView() {
	const { store } = useContext(Context);
	const { id } = useParams();

	// console.log(id);

	return (
		<>
			{store.people.map((newChar, index) => {
				if (index === parseInt(id)) {
					return (
						<Details
							key={index}
							name={newChar.name}
							eye_color={newChar.eye_color}
							skin_color={newChar.skin_color}
							birth_year={newChar.birth_year}
							height={newChar.height}
							gender={newChar.gender}
						/>
					);
				}
			})}
		</>
	);
}
