// // import React from 'react';
// // import { useTheme } from './ThemeContext';
// // import './ThemeToggle.css';

// // const ThemeToggle = () => {
// //   const { darkMode, toggleTheme } = useTheme();

// //   return (
// //     <button className="theme-toggle" onClick={toggleTheme}>
// //       {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
// //     </button>
// //   );
// // };

// // export default ThemeToggle;

// // components/ThemeToggle.js
// import React from 'react';
// import { useTheme } from './ThemeContext';

// const ThemeToggle = () => {
//   const { darkMode, toggleTheme } = useTheme();

//   return (
//     <button
//       onClick={toggleTheme}
//       style={{
//         padding: '0.5rem 1rem',
//         margin: '1rem',
//         borderRadius: '8px',
//         background: darkMode ? '#ff8c00' : '#4b0082',
//         color: 'white',
//         border: 'none',
//         cursor: 'pointer',
//         transition: '0.3s ease',
//       }}
//     >
//       {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
//     </button>
//   );
// };

// export default ThemeToggle;
