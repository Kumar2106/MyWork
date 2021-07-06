/** @format */

import React, { useEffect, useState } from "react";
import "./NodeData.css";

function NodeData() {
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
	}, []);
	return <div className="node__data">{data}</div>;
}

export default NodeData;
