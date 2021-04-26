import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./fonts/BarlowSemiCondensed/BarlowSemiCondensed-Bold.ttf";
import "./fonts/BarlowSemiCondensed/BarlowSemiCondensed-SemiBold.ttf";
import "./styles/styles.scss";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
