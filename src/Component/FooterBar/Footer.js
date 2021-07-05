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
					<h3 className="certifications__heading">Certifications</h3>
					<div className="certifications__content">
						<a
							className="certificate"
							target="_blank"
							href="https://courses.learncodeonline.in/learn/certificate/1383604-33058"
						>
							React Native
						</a>

						<a
							className="certificate"
							target="_blank"
							href="https://courses.learncodeonline.in/learn/certificate/1383604-23129"
						>
							Node Js
						</a>

						<a
							className="certificate"
							target="_blank"
							href="https://courses.learncodeonline.in/learn/certificate/1383604-16452"
						>
							React Native Design
						</a>
					</div>
				</div>

				<div className="certifications__details">
					<h3 className="certifications__heading">Certifications</h3>
					<div className="certifications__content">
						<a
							className="certificate"
							target="_blank"
							href="https://courses.learncodeonline.in/learn/certificate/1383604-27376"
						>
							Android App Development
						</a>

						<a
							className="certificate"
							target="_blank"
							href="https://www.credly.com/badges/663db6dc-4376-41f1-8173-8100c33e0001?source=linked_in_profile"
						>
							Introduction to CyberSecurity
						</a>

						<a
							className="certificate"
							target="_blank"
							href="https://www.credly.com/badges/b749de61-f17f-4f6d-916b-b8b61adf4981?source=linked_in_profile"
						>
							CyberSecurity Essential
						</a>
					</div>
				</div>

				<div className="projects">
					<h3 className="certifications__heading">Projects</h3>
					<div className="certifications__content">
						<a
							className="certificate"
							target="_blank"
							href="https://html-code-editor-e72f2.web.app/"
						>
							HTML Editor
						</a>

						<a
							className="certificate"
							target="_blank"
							href="https://clone-10c57.web.app/"
						>
							Amazon clone
						</a>

						<a
							className="certificate"
							target="_blank"
							href="https://clone-9ef18.web.app/"
						>
							Google Clone
						</a>
					</div>
				</div>

				<div className="projects">
					<h3 className="certifications__heading">Projects</h3>
					<div className="certifications__content">
						<a
							className="certificate"
							target="_blank"
							href="https://netflix-clone-f7139.web.app/"
						>
							Netflix Clone
						</a>
					</div>
				</div>
			</div>

			<div className="footer__bottom">
				<hr className="footer__divider"></hr>
				Designed By Kumar Aditya
			</div>
		</div>
	);
}

export default Footer;
