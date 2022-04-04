import React from "react";
import { NavBar } from "./navBar";
import { Hero } from "./header";
import { CardGrid } from "./cardGrid";

export const Home = () => {
	return (
		<React.Fragment>
			<NavBar />
			<main className="container">
				<Hero />
				<CardGrid />
			</main>
		</React.Fragment>
	);
};
