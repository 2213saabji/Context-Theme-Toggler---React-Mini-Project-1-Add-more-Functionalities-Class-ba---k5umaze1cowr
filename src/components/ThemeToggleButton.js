import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
	const { localTheme, setLocalTheme, globalTheme, setGlobalTheme } =
		useContext(ThemeContext);
	function clickHandler() {
		setGlobalTheme((prev) => {
			if (prev == "light") {
				setLocalTheme("dark");
				return "dark";
			} else {
				setLocalTheme("light");
				return "light";
			}
		});
	}
	return (
		<>
			<button
				onClick={clickHandler}
				id="global-theme-toggler"
				className={`btn btn-${globalTheme} txt-${globalTheme}`}
			>
				Switch to {globalTheme == "light" ? "dark" : "light"} theme
			</button>
		</>
	);
};
export { ThemeToggleButton };
