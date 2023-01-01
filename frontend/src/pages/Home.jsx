import React ,{useEffect,useState} from 'react';
import Nav from '../component/Nav';
import Sidebar from '../component/Sidebar';
import NotFound from './NotFound';
import Footer from "../component/Footer"
import Content from '../component/Content';
import Table from '../component/Table';


const Home = (prop) => {
   const [token,setToken]=useState('')
   useEffect(()=>{
      setToken(localStorage.getItem('token'))
   },[])

      if(token){
            return (
               <div className='overflow-hidden'>
                  <Nav/>
                  <div className="body bg-stone-300">
                     <div className="flex ">
                        <Sidebar/>
                        <div className="content w-[90%]  backdrop-blur-sm bg-white/30 relative ">
                           <Content/>
                           <Table/>
                        </div>
                     </div>
                  <Footer/>
                  </div>
               </div>
            )
      }
      return     <NotFound/>
 


}

export default Home;
