/** @format */

import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import Footer from "./Component/FooterBar/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Resume from "./Component/Resume/Resume";
import ReactData from "./Component/React/ReactData";
import NodeData from "./Component/Nodejs/NodeData";
import Firebase from "./Component/Firebase/Firebase";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<div>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Resume />
						</Route>
						<Route path="/react">
							<ReactData />
						</Route>
						<Route path="/firebase">
							<Firebase />
						</Route>
						<Route path="/nodejs">
							<NodeData />
						</Route>
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
