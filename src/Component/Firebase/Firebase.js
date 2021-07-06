/** @format */

import React, { useEffect, useState } from "react";
import "./Firebase.css";

function Firebase() {
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
	return <div className="firebase__data">{data} </div>;
}

export default Firebase;
