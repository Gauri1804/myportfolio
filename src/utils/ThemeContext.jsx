// import { createContext, useState } from 'react';

// // Create context
// export  const ThemeContext = createContext();
// ThemeContext.displayName = "ThemeContext"; // Improves debugging

// export const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState("light");

//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };



// export default ThemeContext;