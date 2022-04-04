import React from "react";
import { Cards } from "./cards";

// Create Grid //

export const CardGrid = () => {
	return (
		<div className="container">
			<div className="row">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	);
};
