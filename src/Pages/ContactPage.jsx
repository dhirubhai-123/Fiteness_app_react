import React from 'react'

const ContactPage = ({ setShowContactModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75 text-black">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-xl font-semibold">Contact Information</h3>
                    <button
                        onClick={()=>{setShowContactModal.setShowContactModal(false)}}
                        className="text-gray-600 hover:text-gray-900 text-xl font-semibold hover:font-bold"
                    >
                        X
                    </button>
                </div>
                <div className="p-4">
                    <p className="mb-2">
                        <strong>Email:</strong> dhirajkhedkar123@gmail.com
                    </p>
                    <p className="mb-2">
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dhiraj-khedkar-103531200/" className="text-blue-500 hover:underline">www.linkedin.com/in/dhiraj-khedkar-103531200</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage