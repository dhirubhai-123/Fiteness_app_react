// import React from 'react'
// import { useState } from 'react';
// import { showExerciseDetailsContext } from '../context/context';
// import { useContext } from 'react';

// const ExerciseDetails = ({ selectedExercise }) => {

//   const setIsOpenFromContext = useContext(showExerciseDetailsContext)
//   const [isOpen, setIsOpen] = useState(setIsOpenFromContext);
//   // const [selectedExercise, setSelectedExercise] = useState(null);
//   const openModal = (exercise) => { setSelectedExercise(exercise); setIsOpen(true); };
//   const closeModal = () => { setIsOpen(false); setSelectedExercise(null); }

//   return (
//     < div >
//       {
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 overflow-y-auto">
//           <div className="relative bg-white rounded-lg shadow-lg h-full max-w-3xl w-full">
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-xl font-bold">{selectedExercise.name}
//               </h2>
//               <button className="text-gray-500 hover:text-gray-800 font-semibold"
//               onClick={()=>{setIsOpenFromContext(false)}}
//               > Close
//               </button>
//             </div>
//             <div className="p-4 bg-white">
//               <img src={selectedExercise.gifUrl} alt={selectedExercise.name} className="w-full h-auto mb-4" />
//               <h3 className="text-lg font-bold mb-2">Instructions:</h3>
//               <ul className="list-disc list-inside mb-4"> {selectedExercise.instructions.map((instruction, index) => (
//                 <li key={index}>{instruction}</li>))}
//               </ul>
//               <h3 className="text-lg font-bold mb-2">Target Muscles:
//               </h3>
//               <p className="mb-4">{selectedExercise.targetMuscles.join(', ')}</p>
//             </div>
//           </div>
//         </div>
//       }
//     </div >
//   )
// }

// export default ExerciseDetails