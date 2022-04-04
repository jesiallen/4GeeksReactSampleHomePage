import React from "react";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div>
				<a className="navbar-brand mx-4" href="#">
					Start Bootstrap
				</a>
			</div>
			<div
				className="collapse navbar-collapse d-flex justify-content-end mx-4"
				id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link text-light" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
