import React from "react";
import { LoremContent, LoremTitle } from "./cards";

export const Hero = () => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3">
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold">
					<LoremTitle />
				</h1>
				<p className="col-md-8 fs-4">
					<LoremContent />.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Example button
				</button>
			</div>
		</div>
	);
};
