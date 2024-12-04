import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { colors, Typography } from '@mui/material';
import { getOpacity } from '@mui/material/styles/createColorScheme';
import { favExercisesContext } from '../context/context';
import FavExercises from "../Components/FavExercises"
import MostEffectiveExercises from './MostEffectiveExercises';


const Navbar = () => {
  const favExercisesValue = useContext(favExercisesContext);

  // const [changeContinously, updateChangeContiously] = useState(false)
  const [showFavExercises, updateShowFavExercises] = useState(false)
  const [showEffectiveExercises, updateShowEffectiveExercises] = useState(false)
  const mostEffectiveExercises =
    [
      {
        exerciseId: "exercise1",
        name: "Barbell Squat",
        instructions: ["Stand with feet shoulder-width apart.", "Lower your body by bending your knees and hips.", "Keep your chest up and back straight.", "Push through your heels to return to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\Barbell-Back-Squat gif.webp",
        bodyparts: ["Legs"],
        targetMuscles: ["Quadriceps", "Hamstrings", "Glutes"],
        secondaryMuscles: ["Calves", "Lower Back"]
      },
      {
        exerciseId: "exercise2",
        name: "Bench Press",
        instructions: ["Lie on a bench with feet flat on the floor.", "Hold a barbell with hands shoulder-width apart.", "Lower the bar to your chest.", "Press the bar back up to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\Bench Press.gif",
        bodyparts: ["Chest"],
        targetMuscles: ["Pectoralis Major", "Triceps"],
        secondaryMuscles: ["Shoulders", "Anchors"]
      },
      {
        exerciseId: "exercise3",
        name: "Deadlift",
        instructions: ["Stand with feet hip-width apart.", "Bend at your hips and knees to lower the barbell to your shins.", "Keep your back straight and chest up.", "Lift the bar by straightening your hips and knees."],
        gifUrl: "src\\assets\\assets\\images\\Deadlift gif.webp",
        bodyparts: ["Back"],
        targetMuscles: ["Latissimus Dorsi", "Glutes"],
        secondaryMuscles: ["Hamstrings", "Lower Back"]
      },
      {
        exerciseId: "exercise4",
        name: "Overhead Press",
        instructions: ["Stand with feet shoulder-width apart.", "Hold a barbell at shoulder height.", "Press the bar overhead until your arms are fully extended.", "Lower the bar back to shoulder height."],
        gifUrl: "src\\assets\\assets\\images\\Overhead Press gif.gif",
        bodyparts: ["Shoulders"],
        targetMuscles: ["Deltoids"],
        secondaryMuscles: ["Triceps", "Upper Chest"]
      },
      {
        exerciseId: "exercise5",
        name: "Pull-Up",
        instructions: ["Hang from a bar with hands shoulder-width apart.", "Pull your body up until your chin is above the bar.", "Lower yourself back down to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\Pull-Up gif.gif",
        bodyparts: ["Back"],
        targetMuscles: ["Latissimus Dorsi"],
        secondaryMuscles: ["Biceps", "Shoulders"]
      },
      {
        exerciseId: "exercise6",
        name: "Bicep Curl",
        instructions: ["Stand with feet shoulder-width apart.", "Hold a dumbbell in each hand with palms facing forward.", "Curl the weights while keeping your upper arms stationary.", "Lower the weights back to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\biceps-curl gif.gif",
        bodyparts: ["Arms"],
        targetMuscles: ["Biceps"],
        secondaryMuscles: ["Forearms"]
      },
      {
        exerciseId: "exercise7",
        name: "Tricep Extension",
        instructions: ["Stand with feet shoulder-width apart.", "Hold a dumbbell with both hands behind your head.", "Extend your arms to lift the dumbbell overhead.", "Lower the dumbbell back to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\Tricep Extension gif.gif",
        bodyparts: ["Arms"],
        targetMuscles: ["Triceps"],
        secondaryMuscles: ["Shoulders"]
      },
      {
        exerciseId: "exercise8",
        name: "Leg Press",
        instructions: ["Sit in a leg press machine with feet on the platform.", "Lower the platform by bending your knees.", "Push through your heels to return to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\Leg Press gif.gif",
        bodyparts: ["Legs"],
        targetMuscles: ["Quadriceps", "Hamstrings"],
        secondaryMuscles: ["Glutes", "Calves"]
      },
      {
        exerciseId: "exercise9",
        name: "Lateral Raise",
        instructions: ["Stand with feet shoulder-width apart.", "Hold a dumbbell in each hand with arms hanging down.", "Raise your arms to the sides until they are parallel to the ground.", "Lower your arms back to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\single-leg-calf-raise.gif",
        bodyparts: ["Shoulders"],
        targetMuscles: ["Deltoids"],
        secondaryMuscles: ["Traps"]
      },
      {
        exerciseId: "exercise10",
        name: "Calf Raise",
        instructions: ["Stand with feet shoulder-width apart.", "Rise up onto your toes.", "Lower your heels back to the ground."],
        gifUrl: "src\\assets\\assets\\images\\single_calf raise gif.gif",
        bodyparts: ["Legs"],
        targetMuscles: ["Calves"],
        secondaryMuscles: ["Achilles Tendon"]
      },
      {
        exerciseId: "exercise11",
        name: "Dumbbell Lunges",
        instructions: ["Stand with feet shoulder-width apart.", "Step forward with one leg and lower your hips.", "Push back to the starting position.", "Repeat with the other leg."],
        gifUrl: "src\\assets\\assets\\images\\Dumbbell front lunges.gif",
        bodyparts: ["Legs"],
        targetMuscles: ["Quadriceps", "Glutes"],
        secondaryMuscles: ["Hamstrings", "Calves"]
      },
      {
        exerciseId: "exercise12",
        name: "Lat Pulldown",
        instructions: ["Sit at a lat pulldown machine.", "Grab the bar with a wide grip.", "Pull the bar down to your chest.", "Slowly return to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\lap_pull_down_gif.gif",
        bodyparts: ["Back"],
        targetMuscles: ["Latissimus Dorsi"],
        secondaryMuscles: ["Biceps", "Middle Back"]
      },
      {
        exerciseId: "exercise13",
        name: "Chest Fly",
        instructions: ["Lie on a bench with dumbbells in each hand.", "Extend your arms above your chest.", "Lower the weights to the sides of your chest.", "Return to the starting position."],
        // gifUrl: "https://cdn-exercisedb.vercel.app/api/v1/images/lJJ7Yq8.gif",
        gifUrl: "src\\assets\\assets\\images\\Dumbbell-chest-fly gif.webp",
        bodyparts: ["Chest"],
        targetMuscles: ["Pectoralis Major"],
        secondaryMuscles: ["Shoulders", "Biceps"]
      },
      {
        exerciseId: "exercise14",
        name: "Seated Row",
        instructions: ["Sit at a seated row machine.", "Grab the handle with both hands.", "Pull the handle towards your torso.", "Slowly return to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\Seated Cable Row gif.gif",
        bodyparts: ["Back"],
        targetMuscles: ["Latissimus Dorsi"],
        secondaryMuscles: ["Biceps", "Middle Back"]
      },
      {
        exerciseId: "exercise15",
        name: "Plank",
        instructions: ["Position yourself on your elbows and toes.", "Keep your body in a straight line.", "Hold this position for as long as possible."],
        gifUrl: "src\\assets\\assets\\images\\plank gif.jpg",
        bodyparts: ["Core"],
        targetMuscles: ["Abdominals"],
        secondaryMuscles: ["Lower Back", "Shoulders"]
      },
      {
        exerciseId: "exercise16",
        name: "Hammer Curl",
        instructions: ["Stand with feet shoulder-width apart.", "Hold a dumbbell in each hand with palms facing inwards.", "Curl the weights while keeping your upper arms stationary.", "Lower the weights back to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\Hammer Curl gif.gif",
        bodyparts: ["Arms"],
        targetMuscles: ["Biceps", "Brachialis"],
        secondaryMuscles: ["Forearms"]
      },
      {
        exerciseId: "exercise17",
        name: "Glute Bridge",
        instructions: ["Lie on your back with knees bent.", "Lift your hips towards the ceiling.", "Squeeze your glutes at the top.", "Lower your hips back to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\Glute Bridge gif.webp",
        bodyparts: ["Legs"],
        targetMuscles: ["Glutes", "Hamstrings"],
        secondaryMuscles: ["Lower Back"]
      },
      {
        exerciseId: "exercise18",
        name: "Russian Twist",
        instructions: ["Sit on the floor with knees bent.", "Lean back slightly and lift your feet.", "Twist your torso to the right, then to the left."],
        gifUrl: "src\\assets\\assets\\images\\Russian Twist gif.gif",
        bodyparts: ["Core"],
        targetMuscles: ["Obliques"],
        secondaryMuscles: ["Abdominals", "Lower Back"]
      },
      {
        exerciseId: "exercise19",
        name: "Face Pull",
        instructions: ["Attach a rope to a cable machine at face height.", "Grab the rope with both hands.", "Pull the rope towards your face.", "Slowly return to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\Face Pull gif.gif",
        bodyparts: ["Shoulders"],
        targetMuscles: ["Rear Deltoids"],
        secondaryMuscles: ["Traps", "Biceps"]
      },
      {
        exerciseId: "exercise20",
        name: "Leg Curl",
        instructions: ["Lie face down on a leg curl machine.", "Hook your ankles under the padded lever.", "Curl your legs up towards your glutes.", "Slowly return to the starting position."],
        gifUrl: "src\\assets\\assets\\images\\Leg Curl gif.gif",
        bodyparts: ["Legs"],
        targetMuscles: ["Hamstrings"],
        secondaryMuscles: ["Calves"]
      }
    ]


  return (
    <>
      <div className="flex justify-around items-center py-3 bg-red-50">
        <div >
          <NavLink to="/" className='flex justify-center items-center' >
            <div>
              <img src="https://raw.githubusercontent.com/dhirubhai-123/Fiteness_app_react/refs/heads/main/src/assets/assets/images/Logo.png" alt="img" />
            </div>
            <div className='text-3xl text-red-500 px-2 font-bold space-x-1 hover:cursor-pointer'>FitFuesion</div>
          </NavLink>
        </div>

        <div className='flex justify-around items-center gap-8 font-semibold text-xl'>
          <div className='hover:font-bold hover:scale-125 hover:text-slate-800 hover:cursor-pointer'>Home</div>
          <div className='hover:font-bold hover:scale-125 hover:text-slate-800 hover:cursor-pointer'
            onClick={() => {
              // updateShowFavExercises(true)
              alert("These function is currently not available !!")
            }}>Fav-Exercises
            {
              (favExercisesValue.favExercises) &&
              favExercisesValue.favExercises.length > 0 &&
              <span className='relative bottom-2 border border-red-600 rounded-full px-1 text-sm'>{favExercisesValue.favExercises.length}</span>
            }
          </div>
        </div>
      </div>

      <div className='flex w-full justify-between px-1 relative'>
        <div className='flex justify-center items-center flex-col mx-auto'>
          <div className='sm:text-xl md:text-6xl text-red-500 font-semibold'>
            Sweat, Smile and Repeat
          </div>
          <div className='sm:text-xs md:text-lg py-2'>Checkout the most effective Exercises</div>
          <div>
            <button className='sm:text-xs bg-red-500 md:text-lg text-white px-2 rounded-md hover:shadow-xl hover:scale-105 hover:bg-red-600'
              onClick={() => { updateShowEffectiveExercises(true) }}
            >Click here</button>
          </div>

          {/* Showing Most Effective Exercises  */}
          {
            showEffectiveExercises && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 overflow-y-auto">
                <div className="relative bg-slate-800 rounded-lg shadow-lg h-full max-w-3xl w-full">
                  <div className="flex justify-between items-center border-b-2 border-white text-3xl text-white py-2 px-4">
                    <div>Most Effective Exercises</div>
                    <div
                      className="flex justify-center items-center bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 text-white cursor-pointer"
                      onClick={() => {
                        updateShowEffectiveExercises(false);
                      }}
                    >
                      Close
                    </div>
                  </div>
                  <MostEffectiveExercises MostEffectiveExercises={mostEffectiveExercises} />
                </div>
              </div>
            )}

          <Typography fontWeight={600} color="red" sx={{
            opacity: 0.1,
            display: { md: 'block', xs: 'none' },
            fontSize: '6rem'
          }}>
            Exercise
          </Typography>
        </div>

        <div className='lg:w-[33vw] object-cover'>
          <img src="https://raw.githubusercontent.com/dhirubhai-123/Fiteness_app_react/refs/heads/main/src/assets/assets/images/banner.png" alt="" />
        </div>

      </div>


      {
        showFavExercises && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 overflow-y-auto">
            <div className="relative bg-slate-800 rounded-lg shadow-lg h-full max-w-3xl w-full">
              <div className="flex justify-between items-center border-b-2 border-white text-3xl text-white py-2 px-4">
                <div>Your Favourite Exercises</div>
                <div
                  className="flex justify-center items-center bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 text-white cursor-pointer"
                  onClick={() => {
                    updateShowFavExercises(false);
                  }}
                >
                  Close
                </div>
              </div>
              {favExercisesValue.favExercises.length === 0 ? (
                <div className="flex justify-center items-center text-3xl text-red-300 min-h-screen">
                  No Favourite Exercises !!
                </div>
              )
                :
                <FavExercises favExercises={favExercisesValue.favExercises} updateFavExercises={favExercisesValue.updateFavExercises} />
              }
            </div>
          </div>
        )
      }

    </>
  )
}

export default Navbar