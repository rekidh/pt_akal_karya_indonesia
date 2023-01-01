import React,{useState} from 'react'
import Input from './Input';
import Button from './Button'
import axios from 'axios';


export default function Content() {


   const [full_name,setFullName] = useState('');
   const [user_name, setUserName] = useState('');
   const [password,setPassword] = useState('');
   const [city,setCity] = useState('');
   const [status,setStatus] = useState(false);
   const [radio1,setRadio1] = useState(false);
   const [radio2,setRadio2] = useState(false);

   const handleRadio =(e)=>{
      switch(e.target.id){
         case "active":
            e.target.checked=radio1
            e.target.value=radio1
            setStatus(true)
            setRadio1(!radio1)
            break;
            case "inactive":
            e.target.checked=radio2
            e.target.value=radio2
            setStatus(false)
            setRadio2(!radio2)
            break;
         default:
      }

   }

   const handleChange = (event) => {
      switch(event.target.id){
         case "full_name":
            setFullName(event.target.value);
            break;
         case "user_name":
            setUserName(event.target.value);
            break;
         case "password":
            setPassword(event.target.value);
            break;
         case "city":
            setCity(event.target.value);
            break;
         default:
      }
   }
   const handleClick = () => {
      const data={
         user_name,
         password,
         full_name,
         city,
         status
      }
    axios.post(`http://192.168.100.66:5500/post`,data).then((response) => {
        console.log(response)
        window.location.reload()

      });
  };

  return (
      <div className=''>
         <div className="mt-4 flex justify-between bg-gray-300 mx-10 ">
            <h2 className='font-semibold text-2xl '>Dashboard</h2>
            <p>Lorem, ipsum.</p>
         </div>
         <div className="item-add  flex flex-row justify-between  mt-5">
 
         <div className="form w-[93%] m-auto bg-white text-white dark:bg-gray-800 rounded-lg">   
               <form className='p-5'>
                  <h5 className='text-2xl block mb-2 mx-auto w-[30%] font-medium text-stone-500'>masukan data user</h5>
                  <Input func={handleChange} id="user_name" cls="w-[100%] mt-2" label="User Name" type="text"/>
                  <Input func={handleChange} id="password" cls="w-[100%] mt-2" label="Password" type="password"/>
                  <Input func={handleChange} id="full_name" cls="w-[100%] mt-2" label="Full Name" type="text"/>
                  <Input func={handleChange} id="city" cls="w-[100%] mt-2" label="City" type="text"/>
                  <div className="flex flex-col mb-5 mt-2">
                     <p className='block mb-2 text-sm font-medium text-stone-500'>Select status</p>
                     <div className="flex  ">
                        <Input checked={radio1} value={radio1} click={handleRadio} id="active" cls=" mx-2 flex w-[10%] " label="active" type="radio" />
                        <Input checked={radio2} value={radio2} click={handleRadio} id="inactive" cls=" flex flex-start mx-2 w-[12%]   "  label="non active" type="radio"/>
                     </div>
                  </div>

               <Button name="submit" func={handleClick} cls="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
               </form> 

         </div>

         </div>
      </div>
  )
}
