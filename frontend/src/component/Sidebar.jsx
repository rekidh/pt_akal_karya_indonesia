import React from 'react';
import { useState } from 'react';
import SideIcon from './atom/Side.Icon';
import { useHistory } from 'react-router-dom';


const Sidebar = () => {
   
   const brows =useHistory()
   
   const [show ,setShow]=useState(false);
   
   const hendelHide=(e)=>{
      setShow(!show)
   }
   const hendelLogout=(e)=>{
      localStorage.setItem('token', '')
      window.location.replace('/')
   }

   return (        
      <aside onClick={hendelHide} className={`${show?"w-[20%]":"cursor-pointer"} relative bottom-0 top-0 dark:bg-gray-800  `} aria-label="Sidebar">
         <div className=" py-4 px-3 bg-gray-50 dark:bg-gray-800   ">
            <ul className="space-y-2">
               <li>
                  <SideIcon icon="dashboard" show={show} name="dashboard"/>
               </li>
               <li>
                  <SideIcon icon="user"  show={show} name="user" />
               </li>
               <li>
                  <SideIcon icon="logout" click={hendelLogout} show={show} name="logout"/>
               </li>
            </ul>
         </div>
      </aside>
   );
}

export default Sidebar;
