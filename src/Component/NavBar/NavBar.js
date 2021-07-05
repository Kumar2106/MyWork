/** @format */

import React from "react";
import "./NavBar.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className="navbar__outer">
			<div className="navbar">
				<Link to="/">
					<Avatar
						className="profile_img"
						src="https://avatars.githubusercontent.com/u/34748576?v=4"
					/>
				</Link>

				<Link className="navbar_option_link" to="/react">
					<div className="navbar__option"> React </div>
				</Link>

				<Link className="navbar_option_link" to="/firebase">
					<div className="navbar__option"> Firebase </div>
				</Link>

				<Link className="navbar_option_link" to="/nodejs">
					<div className="navbar__option"> Nodejs </div>
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
