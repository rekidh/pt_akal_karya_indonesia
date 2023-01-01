import React from 'react'

export default function TableBody(props) {
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
                            {props.data.city}
                        </td>
                            
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                              <div className={`h-2.5 w-2.5 rounded-full ${props.data.status?"bg-green-400":"bg-red-400"} mr-2`}></div> {props.data.status?"Online":"Ofline"}
                          </div>
                        </td>

                        <td className="py-4 px-6">
                            <a href="/" type="button" data-modal-toggle="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                </tbody>
  )
}
