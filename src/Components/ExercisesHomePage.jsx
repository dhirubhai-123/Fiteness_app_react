import React, { useContext, useState, useEffect } from 'react'
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material'
// import ExerciseDetails from '../Pages/ExerciseDetails'
import { favExercisesContext } from "../context/context"
import ShowMessageForFav from "./ShowMessageForFav"



const ExercisesHomePage = ({ allExercises, titleForExercises }) => {

    const favExercisesValue = useContext(favExercisesContext)
    const favExercises = favExercisesValue.favExercises
    const updateFavExercises = favExercisesValue.updateFavExercises

    const [isOpen, setIsOpen] = useState(false);

    const [addedToFavs, updateAddedToFavs] = useState(false)
    const [message, updateMessage] = useState('')

    const [selectedExercise, setSelectedExercise] = useState(null);
    const openModal = (exercise) => { setSelectedExercise(exercise); setIsOpen(true); };
    const closeModal = () => { setIsOpen(false); setSelectedExercise(null); }

    useEffect(() => {
        favExercisesValue.updateFavExercises(() => {
            const savedExercises = localStorage.getItem('favExercises');
            return savedExercises && JSON.parse(savedExercises);
        })
    }, []);

    useEffect(() => {
        if (addedToFavs) {
            setTimeout(() => {
                updateAddedToFavs(false);
            }, 1000)
        }
    }, [addedToFavs])


    const handleFavClicked = (event, exercise) => {
        event.stopPropagation();

        const itemExists = favExercises.find((item) => item.exerciseId === exercise.exerciseId);
        if (!itemExists) {
            updateFavExercises([...favExercises, exercise]);
            updateAddedToFavs(true)
            updateMessage(`"${exercise.name}" added into favs`)

            localStorage.setItem('favExercises', JSON.stringify(favExercisesValue.favExercises));
            // console.log('Item added:', exercise);

        } else {
            // console.log('Item already exists:', exercise);
        }
    };


    return (
        <>
            {/* <showExerciseDetailsContext.Provider value={setIsOpen}> */}

            <div className="m-2 my-4">

                <h2 className='text-center text-4xl my-2'>
                    {titleForExercises}
                </h2>
                <Grid container spacing={3}> {
                    allExercises.map((exercise) => (
                        <Grid item xs={12} sm={6} md={4} key={exercise.exerciseId}>

                            <Card className='hover:shadow-2xl hover:scale-105 hover:cursor-pointer'
                                onClick={() => openModal(exercise)}
                            >

                                {/* These part will add exercise to favExercises if user click on it */}
                                < div className='flex justify-center m-2 items-center h-8 w-8 hover:scale-110'
                                    onClick={(event) => {
                                        handleFavClicked(event, exercise)
                                    }}
                                >
                                    <img src="https://raw.githubusercontent.com/dhirubhai-123/Fiteness_app_react/refs/heads/main/src/assets/assets/icons/heart.png" alt="heart" className='hover:outline-1 hover:outline-dashed hover:outline-red-500 hover:rounded-md hover:bg-red-50' />
                                </div>

                                <CardMedia component="img" height="140" image={exercise.gifUrl} alt={exercise.name}
                                /> <CardContent>
                                    <Typography gutterBottom variant="h5" component="div"> {exercise.name} </Typography> <Typography variant="body2" color="text.secondary"> Body Parts: {exercise.bodyParts.join(', ')} </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        Target Muscles:
                                        <span className='text-lg text-white mx-2 px-2 bg-red-500 rounded-md'>{exercise.targetMuscles.join(', ')}</span> </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>


                {isOpen &&
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 overflow-y-auto">
                        <div className="relative bg-slate-800 rounded-lg shadow-lg h-full max-w-3xl w-full">
                            <div className="flex justify-between items-center p-4 border-b text-white">
                                <h2 className="text-xl font-bold">{selectedExercise.name}
                                </h2>
                                <div className='flex justify-between gap-x-2 items-center'>
                                    <img src="https://raw.githubusercontent.com/dhirubhai-123/Fiteness_app_react/refs/heads/main/src/assets/assets/icons/heart.png" alt="heart" className='h-7 w-9 rounded-md hover:cursor-pointer bg-white px-1 hover:shadow-md hover:shadow-slate-400 hover:scale-110'
                                        onClick={(event) => {
                                            handleFavClicked(event, selectedExercise)
                                        }}
                                    />

                                    <button onClick={closeModal} className="text-black rounded-sm hover:text-slate-800 bg-red-500 hover:bg-red-600 p-1 px-2 font-semibold hover:shadow-md hover:shadow-slate-400 hover:scale-110"> Close
                                    </button>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-800 text-white">
                                <img src={selectedExercise.gifUrl} alt={selectedExercise.name} className="w-full h-auto mb-4 rounded-lg" />

                                <div className="border-b-1 border-white">
                                    <h3 className="text-lg font-bold mb-2">Instructions:</h3>
                                    <ul className="list-disc list-inside mb-4"> {selectedExercise.instructions.map((instruction, index) => (
                                        <li key={index}>{instruction}</li>))}
                                    </ul>
                                </div>

                                <div className="border-b border-white">
                                    <h3 className="text-lg font-bold mt-2">Target Muscles:
                                    </h3>
                                    <p className="mb-4">{selectedExercise.targetMuscles.join(', ')}</p>
                                </div>

                                <div className="border-b border-white">
                                    <h3 className="text-lg font-bold mt-2">BodyParts:
                                    </h3>
                                    <p className="mb-4">{selectedExercise.bodyParts.join(', ')}</p>
                                </div>

                                <div className="border-b border-white">
                                    <h3 className="text-lg font-bold mt-2">SecondaryMuscles:
                                    </h3>
                                    <p className="mb-4">{selectedExercise.secondaryMuscles.join(', ')}</p>
                                </div>

                                <div className="border-b border-white">
                                    <h3 className="text-lg font-bold mt-2">Equipments:
                                    </h3>
                                    <p className="mb-4">{selectedExercise.equipments.join(', ')}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                }


                {/* showing details of the exercise in large */}
                {/* <div>
                        {isOpen &&
                            <div>
                                <ExerciseDetails selectedExercise={selectedExercise} />
                            </div>
                        }
                    </div> */}
            </div >

            {/* </showExerciseDetailsContext.Provider> */}

            {/* <div className='relative z-10 bg-slate-100'>
                {
                    <ShowMessageForFav message={"exercise added into favs"} />
                }
            </div> */}
            {
                addedToFavs &&
                <div className="fixed inset-0 flex items-center justify-start z-50">
                    <div className="bg-slate-600 p-4 rounded shadow-lg">
                        <ShowMessageForFav message={message} updateAddedToFavs={updateAddedToFavs} />
                        {/* <button onClick={updateAddedToFavs(false)}>X</button> */}
                    </div>
                </div>
            }

        </>
    )
}

export default ExercisesHomePage