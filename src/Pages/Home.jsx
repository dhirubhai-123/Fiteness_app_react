import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import "../App.css"
import { FetchData, options } from "../utils/FetchData"
import { useContext } from 'react'
import { bodyPartContext, favExercisesContext } from '../context/context'

import ExercisesHomePage from '../Components/ExercisesHomePage'
import DefaultBodyParts from '../Components/DefaultBodyParts'
import { Card, CardContent, CardMedia, Typography, Grid, Box, Button, adaptV4Theme } from '@mui/material'

const Home = () => {

  const [bodyPart, updateBodyPart] = useState('waist')
  // const [favExercises, updateFavExercises] = useState([])
  // const bodyPartValue = useContext(bodyPartContext)
  const favExercisesValue = useContext(favExercisesContext)

  const [value, setValue] = useState('Search Exercises')
  const [allExercises, updateAllExercises] = useState([])
  const [allBodyParts, updateAllBodyParts] = useState([])
  const [titleForExercises, updateTitleForExercises] = useState("All Exercises")
  const [searchIsClicked, updateSearchIsClicked] = useState(false)
  const currentPageNo = useRef(1)

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://exercisedb-api.vercel.app/api/v1/exercises');


  const fetchAllExercises = async (url) => {
    try {
      setLoading(true);
      const response = await FetchData(url, options);
      updateAllExercises(response.exercises);
      // console.log(response.exercises)
      setNextPage(response.nextPage);
      // setPreviousPage(url === 'https://exercisedb-api.vercel.app/api/v1/exercises?offset=0&limit=10' ? null : currentPageUrl);
      if (response.previousPage) {

        const url = new URL(response.previousPage);
        const params = new URLSearchParams(url.search);

        let previousOffset = params.get('offset');
        if (previousOffset > 10) {
          previousOffset = previousOffset - 10;

        } else if (previousOffset == 10) {
          previousOffset = 0
        }
        params.set('offset', previousOffset);
        url.search = params.toString();
        setPreviousPage(url.toString());

        // console.log(url.toString()); // This should print the updated URL correctly

        // console.log("complete new Previous Link", url.toString(), "previousOffset", previousOffset)
      }

      // setPreviousPage(response.previousPage)
      setCurrentPageUrl(url);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllExercises(currentPageUrl);
  }, []);

  const handlePreviousPage = () => {
    if (previousPage) {
      fetchAllExercises(previousPage);
      currentPageNo.current = currentPageNo.current - 1;
      // console.log(typeof currentPageNo.current, currentPageNo.current)
    } else {
      // console.log("No previous page available"); // Debugging log 
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      fetchAllExercises(nextPage);
      currentPageNo.current = currentPageNo.current + 1;
      // console.log(typeof currentPageNo.current, currentPageNo.current)
    } else {
      // console.log("No next page available"); // Debugging log 
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }


  const handleSearch = async (value) => {

    value = value.toLowerCase();

    //Fetching all of the exercises and comparing the exercise name with searched value.. total exercises 1320+
    let offset = 0
    let valueFound = false;
    let finalUrl = ''

    //checking with exercise names
    while (offset != 1400) {
      const allExercies = await FetchData(`https://exercisedb-api.vercel.app/api/v1/exercises?offset=${offset}&limit=100`, options)
      // console.log("allExercises", allExercies, "\n allExercises.exercises", allExercies.exercises)

      //checking if the searched value is equal to any of the exercise names
      allExercies.exercises.map((exercise, index) => {
        if (exercise.name == value) {
          // console.log(exercise, value, index, 'actualIndex', index + offset)
          valueFound = true

          //Update the url here (its mandatory)
          finalUrl = `https://exercisedb-api.vercel.app/api/v1/exercises?offset=${offset}&limit=${index + 1}`
          const newTitle = value.charAt(0).toUpperCase() + value.slice(1)
          updateTitleForExercises(`${newTitle} Exercises`)
        }
      })

      if (valueFound) {
        break
      }
      offset += 100;
    }

    //Fetching all Muscles and checking if the user has searched any particular muscle.
    const allMuscles = await FetchData('https://exercisedb-api.vercel.app/api/v1/muscles', options)
    allMuscles.map((muscle) => {
      if (muscle.name == value) {
        // console.log("muscle.name", muscle.name, "value", value)

        //Update the url its mandatory
        finalUrl = `https://exercisedb-api.vercel.app/api/v1/muscles/${value}/exercises?offset=10&limit=10`
        const newTitle = value.charAt(0).toUpperCase() + value.slice(1)
        updateTitleForExercises(`${newTitle} Exercises`)
      }
    })

    //Checking with equipment names
    const allEquipments = await FetchData('https://exercisedb-api.vercel.app/api/v1/equipments', options)
    // console.log("allEquipments", allEquipments)
    allEquipments.map((equipment) => {
      if (equipment.name == value) {
        // console.log("muscle.name", equipment.name, "value", value)

        //Update the url its mandatory
        // const url = 'https://exercisedb-api.vercel.app/api/v1/equipments/body%20weight/exercises';
        finalUrl = `https://exercisedb-api.vercel.app/api/v1/equipments/${equipment.name}/exercises?offset=10&limit=10`
        const newTitle = value.charAt(0).toUpperCase() + value.slice(1)
        updateTitleForExercises(`${newTitle} Exercises`)
      }
    })

    //Checking with bodyPart names
    const allBodyParts = await FetchData('https://exercisedb-api.vercel.app/api/v1/bodyparts', options)
    // console.log("allBodyParts", allBodyParts)
    allBodyParts.map((bodyPart) => {
      if (bodyPart.name == value) {
        // console.log("muscle.name", bodyPart.name, "value", value)

        //Update the url its mandatory
        // const url = 'https://exercisedb-api.vercel.app/api/v1/bodyparts/waist/exercises';
        finalUrl = `https://exercisedb-api.vercel.app/api/v1/bodyparts/${bodyPart.name}/exercises?offset=10&limit=10`
        const newTitle = value.charAt(0).toUpperCase() + value.slice(1)
        updateTitleForExercises(`${newTitle} Exercises`)
      }
    })


    //use these function to find and show the exercises 
    // Using "url" variable
    if (finalUrl) {
      fetchAllExercises(finalUrl)
      setValue('')
      currentPageNo.current = 1
    }
  }

  // }

  //fetches Everything what we need bodyParts, Exercises... etc.
  useEffect(() => {
    const FetchAllExercises = async () => {
      const response = await FetchData('https://exercisedb-api.vercel.app/api/v1/exercises?offset=0&limit=10', options)
      // console.log("fetchAllExercises", response)
      updateAllExercises(response.exercises)
    }

    const fetchAllBodyParts = async () => {
      const response = await FetchData('https://exercisedb-api.vercel.app/api/v1/bodyparts', options)
      // console.log("fetchAllBodyParts", response)
      updateAllBodyParts(response)
    }

    const fetchExercisesByBodyParts = async () => {
      const response = await FetchData('https://exercisedb-api.vercel.app/api/v1/bodyparts/back/exercises?limit=50', options)
      // console.log("fetchExercisesByBodyParts", response)
    }

    const FetchExercisesByMuscles = async () => {
      const response = await FetchData('https://exercisedb-api.vercel.app/api/v1/muscles/upper%20back/exercises', options)
      // console.log("fetchExercisesByMuscles", response)
    }

    const fetchExercisesByEquipments = async () => {
      const response = await FetchData('https://exercisedb-api.vercel.app/api/v1/equipments/body%20weight/exercises', options)
      // console.log("fetchExercisesByEquipments", response)
    }

    // FetchAllExercises();
    // FetchExercisesByMuscles();
    // fetchExercisesByEquipments();
    // fetchExercisesByBodyParts();
    fetchAllBodyParts();

  }, [])

  //special use Effect for bodyPart whenever the bodyPart is set then show the bodyPart exercises
  useEffect(() => {
    if (bodyPart) {
      // console.log("bodyPart from Home Page", bodyPart)
      const finalUrl = `https://exercisedb-api.vercel.app/api/v1/bodyparts/${bodyPart}/exercises?&limit=10`
      const newTitle = bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)
      updateTitleForExercises(`${newTitle} Exercises`)
      fetchAllExercises(finalUrl)
    }
  }, [bodyPart])

  //checking if the values are added into the fav Exercises whenever the 
  // useEffect(() => {
  //   // console.log("FavExercises HomePage", favExercisesValue.favExercises)
  // }, [favExercisesValue])

  return (
    <>
      <div>
        {loading && <div className='text-center p-2'>Loading...</div>}
        {error && <div className='text-center p-2'>Error: {error.message}</div>}
        <div className="flex justify-center items-center p-4">
          <input type="text" placeholder={value} className="w-full max-w-md px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => { setValue('') }} onChange={handleChange}
          />
          <button type="submit" className={value.length < 3 ? "ml-2 px-4 py-2 bg-red-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" : "ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"} onClick={() => {
            // console.log(value);
            handleSearch(value);
            updateSearchIsClicked(true)
          }}
            disabled={value.length < 3 || value === 'Search Exercises'}
          > Search
          </button>

          {/* These will be visible only if the search button is clicked  */}
          {
            searchIsClicked &&
            <button type="submit" className="ml-2 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={() => {
              fetchAllExercises('https://exercisedb-api.vercel.app/api/v1/exercises?offset=0&limit=10')
              updateSearchIsClicked(false);
              updateTitleForExercises("All Exercises")
            }}>All-Exercises
            </button>
          }

        </div>

        <bodyPartContext.Provider value={{ bodyPart, updateBodyPart }}>
          <DefaultBodyParts allBodyParts={allBodyParts} />
        </bodyPartContext.Provider>


        {/* <favExercisesContext.Provider value={{ favExercises, updateFavExercises }}> */}

        {
          allExercises.length === 0 ?
            <div className="flex justify-center items-center text-center text-5xl font-mono min-h-[30vh]">No exercises Found !!</div>
            :
            <ExercisesHomePage allExercises={allExercises} titleForExercises={titleForExercises} />
        }

        {/* </favExercisesContext.Provider> */}


        <div className="flex justify-around items-center my-3">
          <div>
            <button onClick={handlePreviousPage} disabled={!previousPage || currentPageNo.current === 1} className='text-xl bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-600 font-semibold cursor-pointer hover:shadow-xl'>
              &larr; Previous Page
            </button>
          </div>
          <div className='flex justify-center gap-x-1 text-lg font-mono'>
            {currentPageNo.current == 1 ? null :
              <div key={currentPageNo.current - 1} className=''>{currentPageNo.current - 1}</div>
            }
            <div key={currentPageNo.current} className='border border-black px-2 rounded-md scale-110 '>{currentPageNo.current}</div>
            <div key={currentPageNo.current + 1} className=''>{currentPageNo.current + 1}</div>
          </div>
          <div>
            <button onClick={handleNextPage} disabled={!nextPage} className='text-xl bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-600 font-semibold cursor-pointer hover:shadow-xl'>
              Next Page &rarr;
            </button>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home