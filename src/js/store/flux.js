const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://swapi.dev/api/";

	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
			newFavorite: {
				name: ""
			}
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

			addFavorites: async (e, name) => {
				let actions = getActions();
				setStore({
					newFavorite: {
						name: name
					}
				});
				await actions.addFavorite();
				await setStore({
					newFavorite: {
						name: ""
					}
				});
			},

			addFavorite: () => {
				let store = getStore();
				setStore({
					favorites: [...store.favorites, store.newFavorite]
				});
			},

			deleteFavorite: (e, itemToDelete) => {
				let store = getStore();
				let newList = store.favorites.filter((newItem, index) => {
					return index != itemToDelete;
				});
				setStore({
					favorites: [...newList]
				});
			}
		}
	};
};

export default getState;
