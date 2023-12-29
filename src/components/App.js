import React, { useState } from "react";
import "../styles/App.css";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { Page } from "./Page";
const App = () => {
	const [globalTheme, setGlobalTheme] = useState("light");
	const [localTheme, setLocalTheme] = useState("light");
	return (
		<div id="main">
			<ThemeProvider
				globalTheme={globalTheme}
				setGlobalTheme={setGlobalTheme}
				localTheme={localTheme}
				setLocalTheme={setLocalTheme}
			>
				<Page />
				<ThemeToggleButton />
			</ThemeProvider>
		</div>
	);
};

export default App;
