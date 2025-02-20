import { useState } from 'react';
import AddRoleModal from './AddRoleModal';
// import { BsPlus } from "react-icons/bs";
import { FaEdit, FaTrash } from 'react-icons/fa';

function Roles() {
    const [roles, setRoles] = useState([
        { code: "AD", title: "Admin", status: true, created: "08-02-2025" },
      ]);
    
      // Toggle status function
      const toggleStatus = (index) => {
        setRoles((prevRoles) =>
          prevRoles.map((role, i) =>
            i === index ? { ...role, status: !role.status } : role
          )
        );
      };
    
  return (
    <div className='min-h-[30rem dark:bg-bgPrimary-dark p-6]'>
        <div className="bg-white dark:bg-bgPrimary-dark text-gray-900 dark:text-gray-100 p-6 rounded-2xl shadow-md max-w-full dark:border dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-8">Role</h2>
            <div className="absolute top-24 right-20">
               <AddRoleModal />
            </div>
            <div className="overflow-x-auto p-2">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-#F6F9FC">
                    <thead>
                        <tr>
                            <th className="border border-#b2b9cc-300 dark:border-#b2b9cc-700 p-2 text-left w-[100px]">Code</th>
                            <th className="border border-#b2b9cc-300 dark:border-#b2b9cc-700 p-2 text-left w-[300px]">Title</th>
                            <th className="border border-#b2b9cc-300 dark:border-#b2b9cc-700 p-2 text-left w-[100px]">Status</th>
                            <th className="border border-#b2b9cc-300 dark:border-#b2b9cc-700 p-2 text-left w-[150px]">Created</th>
                            <th className="border border-#b2b9cc-300 dark:border-#b2b9cc-700 p-2 text-left w-[130px]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role, index) => (
                            <tr key={index} className="border border-#b2b9cc-300 dark:border-#b2b9cc-700">
                                <td className="p-2 border border-#b2b9cc-300 dark:border-#b2b9cc-700">{role.code}</td>
                                <td className="p-2 border border-#b2b9cc-300 dark:border-#b2b9cc-700">{role.title}</td>
                                <td className="p-2 border border-#b2b9cc-300 dark:border-#b2b9cc-700">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={role.status}
                                            onChange={() => toggleStatus(index)}
                                        />
                                        <div className="w-10 h-5 bg-gray-300 rounded-full transition-all relative" style={{ backgroundColor: role.status ? "rgb(72, 202, 245)" : "#d1d5db" }}>
                        {role.status ? (
                          <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-1 transition-all"></div>
                        ) : (
                          <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-1 transition-all"></div>
                        )}
                      </div>
                                        </label>
                                </td>
                                <td className="p-2 border border-#b2b9cc-300 dark:border-#b2b9cc-700">{role.created}</td>
                                <td className="flex items-center justify-center gap-4 p-3">
                                    <FaTrash className='text-[#48CAF5] cursor-pointer'/> 
                                    <FaEdit className='text-[#48CAF5] cursor-pointer'/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Roles;

