import React,{useState} from 'react'
import axios from 'axios'
import Button from '../Button'
import Toast from '../atom/Toast'
import Swal from 'sweetalert2'


export default function TableBody(props) {

    const handleDeleted = (e)=>{
        axios.delete(`http://localhost:5500/delete?id=${props.data.id}`).then((res)=>{
            Swal.fire({
                icon: 'error',
                title: `delete this ${props.data.full_name}`,
                }).then((e)=>{window.location.reload()})
        })
    }

  return (
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="pl-3">
                                <div className="text-base font-semibold">{props.data.user_name}</div>
                                <div className="font-normal text-gray-500"></div>
                            </div>  
                        </th>
                        <td className="py-4 px-6">
                        {props.data.full_name}
                        </td>

                        <td className="py-4 px-6">
                            {props.data.password}
                        </td>
                        <td className="py-4 px-6">
                            {props.data.city}
                        </td>
                            
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                              <div className={`h-2.5 w-2.5 rounded-full ${props.data.status?"bg-green-400":"bg-red-400"} mr-2`}></div> {props.data.status?"Online":"Ofline"}
                          </div>
                        </td>

                        <td className="py-4 px-6">
                            <Button func={handleDeleted} name="Delete"/>
                        </td>
                    </tr>
                </tbody>
  )
}
