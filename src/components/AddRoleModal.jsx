import { useState } from 'react';
import { BsPlus } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

function AddRoleModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roleTitle, setRoleTitle] = useState("");
    const [roleCode, setRoleCode] = useState("");
    const [status, setStatus] = useState(false);

    // Open Modal
    const showModal = () => setIsModalOpen(true);

    // Close Modal
    const handleClose = () => setIsModalOpen(false);

    // Save Role Data
    const handleSave = () => {
        console.log({
        roleTitle,
        roleCode,
        status,
        });
        setIsModalOpen(false);
    };
  return (
    <>
        <button onClick={showModal}
        className="bg-#0074ba-400 text-white p-5 rounded-full flex items-center justify-center hover:bg-#5d87ff-500"
        >
            <BsPlus size={24} className="text-white" />
        </button>

          {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl w-2/3 shadow-lg">
             {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[#48CAF5]">Add Role</h2>
          <FaTimes className="cursor-pointer text-gray-500" onClick={handleClose} />
        </div>
            {/* Role Title Input */}
            <input
              type="text"
              placeholder="Role Title"
              value={roleTitle}
              onChange={(e) => setRoleTitle(e.target.value)}
              className="w-full border p-2 rounded-lg mt-4"
            />

            {/* Role Code Input */}
            <input
              type="text"
              placeholder="Role Code"
              value={roleCode}
              onChange={(e) => setRoleCode(e.target.value)}
              className="w-full border p-2 rounded-lg mt-4"
            />

            {/* Status Toggle */}
            <div className="flex items-center gap-2 mt-4">
              <span>Status</span>
              <div
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all ${
                  status ? "bg-[#48CAF5]" : "bg-gray-400"
                }`}
                onClick={() => setStatus(!status)}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-all ${
                    status ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="bg-teal-500 text-white w-full py-2 rounded-lg mt-4"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AddRoleModal