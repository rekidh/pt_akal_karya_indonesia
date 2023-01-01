import React from 'react';

const Input = (props) => {
   return (
      <div className={`${props.cls?props.cls: "w-80"}`}>
      <label for="small-input" className={`${props.type==="radio"?"w-full mx-2": ""} "block text-sm font-medium text-stone-500 " `} >{props.label}</label>
      <input 
      onChange={props.func}
      onClick={props.click}
      value={props.value}
      type={props.type} 
      id={props.id} 
      className={`${props.type!="radio"?"w-full": ""} block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}></input>
      </div>
   );
}

export default Input;
