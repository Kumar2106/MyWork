/** @format */

import React from "react";
import "./Footer.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
	return (
		<div className="footer__outer">
			<div className="footer__content">
				<div className="contact__details">
					<img src="https://avatars.githubusercontent.com/u/34748576?v=4" />
					<div className="contact__icon">
						<a href="https://wa.me/+918700123737" target="_blank">
							<WhatsAppIcon className="icon" />
						</a>

						<a href="mailto:ka09934147002@gmail.com" target="_blank">
							<EmailIcon className="icon" />
						</a>

						<a
							href="https://www.linkedin.com/in/kumaraditya21/"
							target="_blank"
						>
							<LinkedInIcon className="icon" />
						</a>

						<a
							href="https://www.instagram.com/kumaraditya2106/"
							target="_blank"
						>
							<InstagramIcon className="icon" />
						</a>
					</div>
				</div>

				<div className="certifications__details">
					<p>Certifications</p>
				</div>

				<div className="projects">
					<img src="https://avatars.githubusercontent.com/u/34748576?v=4" />
				</div>

				<div></div>
			</div>

			<div className="footer__bottom"></div>
		</div>
	);
}

export default Footer;
