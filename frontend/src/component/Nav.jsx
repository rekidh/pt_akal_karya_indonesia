import React from 'react';

const Nav = () => {
   return (
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
         <div className="container flex flex-wrap items-center justify-between mx-auto">
         <a href="/home" className="flex items-center">
               <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Home</span>
         </a>

         </div>
      </nav>
   );
}

export default Nav;
