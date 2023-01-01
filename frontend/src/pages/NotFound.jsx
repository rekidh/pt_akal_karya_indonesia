import React from 'react';

const NotFound = () => {
   return (
      <section className="flex items-center h-[100%]  w-[100%] absolute p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
         <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
               <span className="sr-only">Error</span>404
            </h2>
            <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</a>
         </div>
      </div>
   </section>
   );
}

export default NotFound;
