import React from "react";
import { createOasis } from "./oasis";
import './style.less';

function App() {
	React.useEffect(() => {
		createOasis();
	}, []);

	return (
		<canvas id="canvas" style={{ width: "100vw", height: "100vh" }}></canvas>
	);
}

export default App;
