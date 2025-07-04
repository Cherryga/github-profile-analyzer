// // components/ThemeContext.js
// import React, { createContext, useContext, useState, useEffect } from "react";

// // Create the context
// const ThemeContext = createContext();

// // ThemeProvider component
// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme === "dark") {
//       setDarkMode(true);
//       document.body.classList.add("dark");
//     }
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.body.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const toggleTheme = () => setDarkMode((prev) => !prev);

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // useTheme hook (THIS WAS MISSING!)
// export const useTheme = () => useContext(ThemeContext);
