import React from "react";

const ThemeContext = React.createContext();
const ThemeProvider = (props) => {
	return (
		<React.Fragment>
			<ThemeContext.Provider
				value={{
					globalTheme: props.globalTheme,
					setGlobalTheme: props.setGlobalTheme,
					localTheme: props.localTheme,
					setLocalTheme: props.setLocalTheme,
				}}
			>
				{props.children}
			</ThemeContext.Provider>
		</React.Fragment>
	);
};

export { ThemeProvider, ThemeContext };
