import React, { useEffect, useState } from 'react';
import { favExercisesContext } from '../context/context';
import { useContext } from 'react';

const FavExercises = ({ favExercises }) => {
    const favExercisesValue = useContext(favExercisesContext)
    // const favExercises = favExercisesValue.favExercises
    const updateFavExercises = favExercisesValue.updateFavExercises
    const [hoveredExercise, setHoveredExercise] = useState(null);

    const handleFavsRemoveClicked = (id, name) => {
        if (confirm(`Remove ${name} from Favourites ??`)) {
            updateFavExercises(prevItems => prevItems.filter(item => item.exerciseId !== id));
            localStorage.setItem('favExercises', JSON.stringify(favExercisesValue.favExercises));
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 bg-slate-800">
            {favExercises.map((exercise) => (
                <div
                    key={exercise.exerciseId}
                    onMouseEnter={() => {
                        setTimeout(() => {
                            setHoveredExercise(exercise.exerciseId);
                        }, 1500);
                    }}
                    onMouseLeave={() => {
                        setHoveredExercise(null);
                    }}
                    className="bg-white hover:cursor-pointer hover:shadow-lg hover:scale-110 hover:shadow-slate-500 rounded-lg shadow-md overflow-hidden"
                >
                    <img className="w-full h-48 object-cover" src={exercise.gifUrl} alt={exercise.name} />
                    <div className="p-4">
                        <div className="flex justify-around items-center font-bold text-xl mb-2">
                            {exercise.name}
                            <button className='mx-2 px-2 rounded-md bg-red-500 hover:text-white hover:shadow-xl hover:shadow-slate-400 hover:bg-red-600'
                                onClick={() => { handleFavsRemoveClicked(exercise.exerciseId, exercise.name) }}
                            >remove</button>
                        </div>
                        <p className="text-gray-700 text-base">
                            <strong>Body Part:&nbsp;</strong>{exercise.bodyParts}
                        </p>
                        <p className="text-gray-700 text-base">
                            <strong>Target Muscle:&nbsp;</strong>{exercise.targetMuscles}
                        </p>
                        {hoveredExercise === exercise.exerciseId && (
                            <div>
                                <p className="text-gray-700 text-base">
                                    <strong>Instructions:&nbsp;</strong>{exercise.instructions}
                                </p>
                                <p className="text-gray-700 text-base">
                                    <strong>Secondary Muscles:&nbsp;</strong>{exercise.secondaryMuscles.join(', ')}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FavExercises;
