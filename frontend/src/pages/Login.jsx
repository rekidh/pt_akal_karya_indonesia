import React ,{ useState }from 'react';
import {useHistory,Redirect} from "react-router-dom";
import axios from "axios";
import Input from '../component/Input';
import Button  from '../component/Button';
import bg from '../asset/bg-image.jpg'
import Home from './Home';

const Login = () => {
   const brows =useHistory()
   const [token,setToken]=useState('')
   const [loginStat,setLoginStat]=useState('')
   const [message,setMessage]=useState('')

   const [userName, setUserName] = useState('');

   const [password,setPassword] = useState('');


   const handleChange = (event) => {
   switch(event.target.id){
      case "username":
         setUserName(event.target.value);
         break;
      case "password":
         setPassword(event.target.value);
         break;
      default:

   }
  };

  const handleClick = async () => {

      await   axios.post(`http://192.168.100.66:5500/login`, {userName,password}).then((res) => {
         console.log(res.data)
         if(res.data.code===400){
            setMessage(res.data.messages)
         }
         if(res.data.messages=="token"){
         setToken(res.data.data)
      }else{
         setLoginStat(res.data.massage)
         // window.location.replace('/home')
            // return <Home token={token}/>
            // if(token){
               // brows.push('/home')
            //    window.location.reload(false)
            //    window.location.reload('/home')
            // }
         }
      });
  };
      localStorage.setItem('token', token)

 
if(!token){ 
    return (
            <div className="absolute h-screen w-screen overflow-hidden  ">
               <img src={bg} alt="" className='absolute w-screen bg-center ' />
               <div className='flex flex-col justify-center p-7 items-center backdrop-blur-sm bg-white/30 md:max-w-[400px]  md:mx-auto sm:mx-auto md:mt-[8%] mt-[20%] dark:text-white'>
                  
                  <div className="text-red-500">
                  {message?message:''}
                  </div>
                  <h1 className='text-3xl font-bold mb-5 text-stone-600 '>Login from </h1>
                  <form action="" className='md:max-w-96'>
                     <Input label="User name" type="text" value={userName} func={handleChange} id="username" />
                     <Input label="Password" type="password" value={password} func={handleChange} id="password" />
                     <div className="mt-4">
                     <Button name="Login" func={handleClick}/>
                     </div>
                     </form>
                  <a href="/register" className="text-stone-600">Register now</a>
                  <p>{loginStat}</p>
               </div>
            </div>
      );  
    }else{
       window.location.replace('/home')
      return <Home token={token}/>

    }

      
}

export default Login;
