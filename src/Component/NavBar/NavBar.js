/** @format */

import React from "react";
import "./NavBar.css";
import { Avatar } from "@material-ui/core";

function NavBar() {
	return (
		<div className="navbar__outer">
			<div className="navbar">
				<Avatar
					className="profile_img"
					src="https://avatars.githubusercontent.com/u/34748576?v=4"
				/>
				<a
					href="https://reactjs.org/"
					target="_blank"
					className="navbar_option_link"
				>
					<div className="navbar__option"> React </div>
				</a>
				<a
					href="https://firebase.google.com"
					target="_blank"
					className="navbar_option_link"
				>
					<div className="navbar__option"> Firebase </div>
				</a>
				<a
					href="https://nodejs.org/en/"
					target="_blank"
					className="navbar_option_link"
				>
					<div className="navbar__option"> Nodejs </div>
				</a>
			</div>
		</div>
	);
}

export default NavBar;
