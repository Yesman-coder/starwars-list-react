const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://swapi.dev/api/";

	return {
		store: {
			people: [],
			planets: []
		},
		actions: {
			getPeople: async () => {
				const response = await fetch(`${baseUrl}people/`);
				const data = await response.json();
				setStore({ people: data.results });
			},

			getPlanets: async () => {
				const response = await fetch(`${baseUrl}planets/`);
				const data = await response.json();
				setStore({ planets: data.results });
			}
		}
	};
};

export default getState;
