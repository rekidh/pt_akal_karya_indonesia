import React ,{ useState }from 'react';
import Login from './Login';
import { useHistory  } from 'react-router-dom'
import Toast from '../component/atom/Toast';
import axios from "axios";
import Input from '../component/Input';
import Button  from '../component/Button';
import bg from '../asset/bg-image.jpg'

const Register = () => {

   const [name,setName] = useState('');
   const [massage,setMassage] = useState('');
   const [status,setStatus] = useState(false);
   const [userName, setUserName] = useState('');
   const [password,setPassword] = useState('');
   const brows=useHistory()

   const handleChange = (event) => {
      switch(event.target.id){
            case "name":
               setName(event.target.value);
               break;
            case "userName":
               setUserName(event.target.value);
               break;
            case "password":
               setPassword(event.target.value);
               break;
            default:
         }
  };

  const handleClick = () => {
    axios.post(`http://192.168.100.66:5500/register`, {name,userName,password}).then((response) => {
        console.log(response)
        if(response.status===200){
         setStatus(true)
         setMassage(response.massage)
         brows.push('/login')
        }
      });
  };
   if(window.location.pathname==="/register"){
         return (
            <>
         <div className="absolute h-screen w-screen overflow-hidden  ">
            <img src={bg} alt="" className='absolute w-screen bg-center ' />
            <div className='flex flex-col justify-center p-7 items-center backdrop-blur-sm bg-white/30 md:max-w-[400px]  md:mx-auto sm:mx-auto md:mt-[8%] mt-[20%] dark:text-white'>
               {status?<Toast icon={status} massage={massage} />:''} 
                  <h1 className='text-3xl font-bold mb-5 text-stone-600 '>Register from </h1>
                  <form action="" className='md:max-w-96'>
                     <Input label="Name" type="text" value={name} func={handleChange} id="name" />
                     <Input label="UserName" type="text" value={userName} func={handleChange} id="userName" />
                     <Input label="Password" type="password" value={password} func={handleChange} id="password" />
                     <div className="mt-4">
                     <Button name="Register" func={handleClick}/>
                     </div>
                  </form> 
                     <a href="/" className='text-stone-800'> <span >Login Now</span></a>
            </div>
         </div>
         </>
      );
   }
   if(window.location.pathname==="/login")
   {
      return (<Login/>)
   }
}

export default Register;
