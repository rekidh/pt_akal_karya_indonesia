import React,{useEffect,useState}from 'react';
import Pagination from './atom/Pagination';
import Input from './Input';
import TableBody from './atom/TableBody';
import axios from 'axios';


const Table =  () => {

    const [data,setData]=useState([])
    const [name,setName]=useState(false)
    const [full_name,setFull_name]=useState(false)
    const [city,setCity]=useState(false)
    const [status,setStatus]=useState(false)

    useEffect(()=>{
        axios.get(`http://192.168.100.66:5500/get`).then((res)=>{
            setData(res.data.data)
            console.log(res.data.data)
        })
    },[])

    const handleChange=(e)=>{
        
        let filter=[!name,!full_name,!city,!status]
        let filter1=[]
        filter.forEach((e)=>{
            if(e==true){
                filter1.push(1,"f")
            }            
        })
        console.log(filter1)

        axios.get(`http://192.168.100.66:5500/search?user_name=${e.target.value}`).then((res)=>{
            setData(res.data.data)
        })
    }


    const handleRadio =(e)=>{
      switch(e.target.id){
         case "name":
            e.target.checked=name
            setName(!name)
            break;
         case "full_name":
            e.target.checked=full_name
            setFull_name(!full_name)
            break;
         case "city":
            e.target.checked=city
            setCity(!city)
            break;
         case "status":
            e.target.checked=status
            setStatus(!status)
            break;

         default:
      }

   }


   return (
      <>   
        <div className="overflow-x-auto mx-10 shadow-md sm:rounded-lg mb-5 mt-14 ">
            <div className="flex justify-between items-center px-5 py-4 bg-white dark:bg-gray-800">
               <div className="flex">
                    <p className='text-gray-500'>Filter by</p>
                    <div className='flex justify-between items-center mx-5'>
                        <Input click={handleRadio} id="name" cls=" flex justify-center items-center mx-2" label="name" type="radio"/>
                        <Input click={handleRadio} id="full_name" cls=" flex justify-center items-center mx-2" label="full_name" type="radio"/>
                        <Input click={handleRadio} id="city" cls=" flex justify-center items-center mx-2" label="city" type="radio"/>
                        <Input click={handleRadio} id="status" cls=" flex justify-center items-center mx-2" label="status" type="radio"/>
                    </div>
               </div>
                <label for="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text"  onChange={handleChange} id="table-search-users" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
                </div>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            User Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Full Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Password
                        </th>
                        <th scope="col" className="py-3 px-6">
                            City
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>


            {data?data.map((x)=> <TableBody  data={x}/>):''}
        </table>
        </div>
    <Pagination/>
      </>
   );
}



export default Table;
