import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imagen from "../../img/starwars.png";
import { Context } from "../store/appContext";
import { Dropdown, DropdownButton } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light" style={{ backgroundColor: "#999999" }}>
			<Link to="/" id="link-home">
				<img style={{ width: "100px", height: "100px" }} src={imagen} alt="Starwars Logo" />
			</Link>
			<DropdownButton
				id="dropdown-basic-button"
				title={"Favorites " + store.favorites.length}
				variant="outline-warning">
				{store.favorites.map((favorites, id) => {
					return (
						<>
							<Dropdown.ItemText key={id} className="d-flex justify-content-between">
								<a>{favorites.name}</a>
								<i onClick={e => actions.deleteFavorite(e, id)} className="fas fa-trash-alt m-2" />
							</Dropdown.ItemText>
						</>
					);
				})}
			</DropdownButton>
			{/* <div className="dropdown">
				<button
					type="button"
					id="dropdownMenuButton"
					className="btn btn-outline-warning dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<span className="badge badge-light">{store.favorites.length}</span>
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						{store.favorites.name}
						<i className="fas fa-trash" />
					</a>
				</div>
			</div> */}
		</nav>
	);
};
