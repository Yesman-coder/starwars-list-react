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
			},

			addFavorite: async itemToAdd => {
				const newList = store.people.filter((newItem, index) => {
					return newItem == itemToAdd;
				});
				setListItems(newList);
				console.log(newList);
			}
		}
	};
};

export default getState;
