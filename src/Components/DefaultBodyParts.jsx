import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { bodyPartContext } from '../context/context'


const DefaultBodyParts = ({ allBodyParts }) => {

    const bodyPartValue = useContext(bodyPartContext)
    const bodyPart = bodyPartValue.bodyPart
    const updateBodyPart = bodyPartValue.updateBodyPart

    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -200, // Adjust the scroll distance as needed 
            behavior: 'smooth'
        });
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 200, // Adjust the scroll distance as needed 
            behavior: 'smooth'
        });
    }

    // useEffect(() => {
    //     console.log(bodyPart);
    // }, [bodyPart])

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="relative flex items-center">
                    <button onClick={scrollLeft} className="absolute left-0 z-10 p-2 bg-gray-300 rounded-full shadow-md hover:bg-gray-400" > &#8592; </button>
                    <div ref={scrollRef} className="flex overflow-x-auto space-x-4 hide-scrollbar" > {allBodyParts.map((part, index) => (
                        <div key={index} className="w-48 flex-shrink-0 m-4 p-4 bg-white rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
                            onClick={() => { updateBodyPart(part.name) }}
                        >
                            <img src="src\assets\assets\icons\dumbell.png" alt={part.name} className="w-full h-28 object-contain rounded-md mb-2" />
                            <h2 className="text-lg font-bold">{part.name}</h2>
                        </div>
                    ))
                    }
                    </div>
                    <button onClick={scrollRight} className="absolute right-0 z-10 p-2 bg-gray-300 rounded-full shadow-md hover:bg-gray-400" > &#8594;
                    </button>
                </div>
            </div>
        </>
    )
}

export default DefaultBodyParts