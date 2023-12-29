import React, { useContext } from "react";
import { LocalThemedBox } from "./LocalThemedBox";
import { ThemeContext } from "./ThemeProvider";

const Page = () => {
	const { globalTheme, setGlobalTheme } = useContext(ThemeContext);
	return (
		<div className={`container bg-${globalTheme}`} id="themed-page">
			<p id="themed-text-container" className={`txt-${globalTheme}`}>
				lorem ipsum dolor iterit n stuff
			</p>
			<button
				className={`btn btn-${globalTheme} txt-${globalTheme}`}
				id="themed-button"
			>
				Themed Button
			</button>
			<LocalThemedBox />
		</div>
	);
};

export { Page };
