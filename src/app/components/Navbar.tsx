// import React from 'react';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
//       {/* Logo */}
//       <div className="text-2xl font-bold text-blue-600">MORENT</div>

//       {/* Search Bar */}
//       <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-lg">
//         <input
//           type="text"
//           placeholder="Search something here"
//           className="flex-grow bg-transparent outline-none text-sm text-gray-600"
//         />
//         <button className="text-gray-600 text-xl">
//           <span role="img" aria-label="search">🔍</span>
//         </button>
//       </div>

//       {/* Icons */}
//       <div className="flex items-center gap-4">
//         <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
//           ❤️
//         </span>
//         <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
//           🔔
//         </span>
//         <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
//           ⚙️
//         </span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// "use client"
// import React, { useState } from "react";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
//       {/* Logo */}
//       <div className="text-2xl font-bold text-blue-600">MORENT</div>

//       {/* Hamburger Menu (for smaller screens) */}
//       <button
//         className="block md:hidden text-gray-600 text-2xl focus:outline-none"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         ☰
//       </button>

//       {/* Search Bar and Icons (hidden on smaller screens when menu is closed) */}
//       <div
//         className={`fixed md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:justify-between ${
//           isMenuOpen ? "block" : "hidden"
//         } md:flex-row px-6 py-4 md:p-0 shadow-md md:shadow-none`}
//       >
//         {/* Search Bar */}
//         <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:max-w-lg mb-4 md:mb-0">
//           <input
//             type="text"
//             placeholder="Search something here"
//             className="flex-grow bg-transparent outline-none text-sm text-gray-600"
//           />
//           <button className="text-gray-600 text-xl">
//             <span role="img" aria-label="search">
//               🔍
//             </span>
//           </button>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center gap-4">
//           <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
//             ❤️
//           </span>
//           <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
//             🔔
//           </span>
//           <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
//             ⚙️
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client"
// import React, { useState } from "react";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
//       {/* Logo */}
//       <div className="text-2xl font-bold text-blue-600">MORENT</div>

//       {/* Hamburger Menu (for smaller screens) */}
//       <button
//         className="block md:hidden text-gray-600 text-2xl focus:outline-none"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         ☰
//       </button>

//       {/* Search Bar and Icons (hidden on smaller screens when menu is closed) */}
//       <div
//         className={`fixed md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:justify-center ${
//           isMenuOpen ? "block" : "hidden"
//         } md:flex-row px-6 py-4 md:p-0 shadow-md md:shadow-none`}
//       >
//         {/* Search Bar */}
//         <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:max-w-lg md:mx-auto mb-4 md:mb-0">
//           <input
//             type="text"
//             placeholder="Search something here"
//             className="flex-grow bg-transparent outline-none text-sm text-gray-600"
//           />
//           <button className="text-gray-600 text-xl">
//             <span role="img" aria-label="search">
//               🔍
//             </span>
//           </button>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center gap-4 md:ml-4">
//           <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
//             ❤️
//           </span>
//           <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
//             🔔
//           </span>
//           <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
//             ⚙️
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">MORENT</div>

      {/* Hamburger Menu (for smaller screens) */}
      <button
        className="block md:hidden text-gray-600 text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Search Bar (centered on large screens) */}
      <div
        className={`flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:max-w-lg ${
          isMenuOpen ? "block fixed top-16 left-0" : "hidden"
        } md:static md:flex md:mx-auto`}
      >
        <input
          type="text"
          placeholder="Search something here"
          className="flex-grow bg-transparent outline-none text-sm text-gray-600"
        />
        <button className="text-gray-600 text-xl">
          <span role="img" aria-label="search">
            🔍
          </span>
        </button>
      </div>

      {/* Icons */}
      <div
        className={`flex items-center gap-4 ${
          isMenuOpen ? "block fixed top-28 left-0 w-full" : "hidden"
        } md:flex md:static`}
      >
        <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
          ❤️
        </span>
        <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
          🔔
        </span>
        <span className="text-gray-600 text-lg cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110">
          ⚙️
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
