import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const AboutModal = ({ setShowAboutModal }) => {

    return (

        <div className="fixed inset-0 flex items-center text-black justify-center z-50 bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-xl font-semibold">About FitFusion</h3>
                    <button
                        onClick={() => { setShowAboutModal.setShowAboutModal(false) }}
                        className="text-gray-600 hover:text-gray-900 text-xl font-semibold hover:font-bold"
                    >
                        X
                    </button>
                </div>
                <div className="p-4">
                    <p className="mb-4">
                        Welcome to FitFusion, your ultimate partner in fitness! At FitFusion, we believe that fitness is not just a routine, but a way of life. Our platform is dedicated to helping you achieve your fitness goals through personalized workout plans, expert advice, and a supportive community.
                    </p>
                    <p className="mb-4">
                        Whether you're a beginner or a seasoned athlete, FitFusion offers a wide range of resources to help you stay motivated and on track. From instructional videos and nutrition tips to tracking your progress, we provide everything you need to succeed on your fitness journey.
                    </p>
                    <p>
                        Join us at FitFusion and transform your health and wellness. Let's fuse together our passion for fitness and create a healthier, happier you!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutModal;
