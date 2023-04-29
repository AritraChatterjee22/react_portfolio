import React from "react";
import "./certifications.css";

import { TbCertificate2 } from "react-icons/tb";

const data = [
	{
		id: 1,
		title: "Getting Started with Python",
		provider: "Coursera",
		link: "https://drive.google.com/file/d/1jkAumMhMYqBcv-J8iUsTBWP4_ajbqw6q/view?usp=share_link",
	},
	{
		id: 1,
		title: "Usable Security",
		provider: "Coursera",
		link: "https://drive.google.com/file/d/1NFW4hvZX4crVpaOIn39fz3H42cfxs1uo/view?usp=share_link",
	},
	{
		id: 1,
		title: "Martian Certificate",
		provider: "Persistent Systems",
		link: "https://drive.google.com/file/d/1sCfTLmNyeN5Pciy3M_U6TgB5U5HO5NiW/view?usp=share_link",
	},
	{
		id: 1,
		title: "Internship",
		provider: "Millimetre Labs",
		link: "https://drive.google.com/file/d/1b_IEDo78dFL0C5Vh8FZgLY1hG1L7uC8Y/view?usp=share_link",
	},
	{
		id: 1,
		title: "Azure Fundamentals(AZ900)",
		provider: "Microsoft",
		link: "https://drive.google.com/file/d/1zfM6OC8yrIRgfGM0zk3w9cg66lW2UWIO/view?usp=share_link",
	},
];

const Certifications = () => {
	return (
		<section id="certifications">
			<h5>Details of my skills</h5>
			<h2>Certifications</h2>

			<div className="container certifications__container">
				{data.map(({ id, title, provider, link }) => (
					<article className="certificate">
						<TbCertificate2 className="certificate__icon" />
						<h3>{title}</h3>
						<small>{provider}</small>

						<a href={link} className="btn" target="_blank" rel="noreferrer">
							View
						</a>
					</article>
				))}
			</div>
		</section>
	);
};

export default Certifications;
