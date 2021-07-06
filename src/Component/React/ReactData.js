/** @format */

import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./ReactData.css";

function ReactData() {
	const [data, setdata] = useState([]);
	useEffect(() => {
		function fetchData() {
			fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=15").then(
				(data) => {
					data.json().then((content) => {
						setdata(content);
					});
				}
			);
			console.log("The data requested is here" + data);
		}
		fetchData();
		console.log(data);
	}, []);

	return <div className="react_data">{data}</div>;
}

export default ReactData;
