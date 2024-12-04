import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ContactPage from '../Pages/ContactPage';
import AboutModal from '../Pages/About';

const Footer = () => {

  const [showContactModal, setShowContactModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);


  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <img src="https://github.com/dhirubhai-123/Fiteness_app_react/blob/main/src/assets/assets/images/Logo.png" alt="FitFuesion Logo" className="invert h-12 w-12 mb-4" />
            <p className="text-gray-400">
              FitFuesion - Your Partner in Fitness.
            </p>
          </div>
          <div className="w-full lg:w-2/3 flex flex-wrap justify-around">
            <div className="w-1/2 md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
              <h2 className="text-lg mb-4">Quick Links</h2>
              <ul>
                <li className="mb-2 text-gray-400 hover:text-white hover:cursor-pointer">Home</li>
                <li className="mb-2 text-gray-400 hover:text-white hover:cursor-pointer"
                  onClick={() => { setShowAboutModal(true) }}
                >About</li>
                <li className="mb-2 text-gray-400 hover:text-white hover:cursor-pointer"
                  onClick={() => { setShowContactModal(true) }}
                >
                  Contact</li>

                {showContactModal && (
                  <ContactPage setShowContactModal={{ setShowContactModal }} />
                )}

                {showAboutModal &&
                  <AboutModal setShowAboutModal={{ setShowAboutModal }} />
                }


              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
              <h2 className="text-lg mb-4">Youtube Links</h2>
              <ul>
                <li className="mb-2"><a href="https://www.youtube.com/@YatinderSinghOfficial" className="text-gray-400 hover:text-white">Yatindar</a></li>
                <li className="mb-2"><a href="https://www.youtube.com/@GuruMannFitness" className="text-gray-400 hover:text-white">Guruman</a></li>
                <li className="mb-2"><a href="https://www.youtube.com/@JeetSelalAesthetics" className="text-gray-400 hover:text-white">Jeet</a></li>
                <li className="mb-2"><a href="https://www.youtube.com/@bodybuildingcom" className="text-gray-400 hover:text-white">Bodybuilding.com</a></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
              <h2 className="text-lg mb-4">Blogs</h2>
              <ul>
                <li className="mb-2"><a href="https://muscleandbrawn.com/bodybuilding/best-websites/?form=MG0AV3" className="text-gray-400 hover:text-white">BodyBuilding</a></li>
                <li className="mb-2"><a href="https://www.developgoodhabits.com/fitness-blogs/?form=MG0AV3" className="text-gray-400 hover:text-white">developGoodHabits</a></li>
                <li className="mb-2"><a href="https://www.shortform.com/blog/best-bodybuilding-resources-books-blogs-podcasts/?form=MG0AV3" className="text-gray-400 hover:text-white">shortForm</a></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
              <h2 className="text-lg mb-4">Social</h2>
              <ul>
                <li className="mb-2"><a href="https://github.com/dhirubhai-123/" className="text-gray-400 hover:text-white">GitHub</a></li>
                <li className="mb-2"><a href="https://www.linkedin.com/in/dhiraj-khedkar-103531200/" className="text-gray-400 hover:text-white">Linkedin</a></li>
                <li className="mb-2"><a href="https://workspace.google.com/intl/en-US/gmail/" className="text-gray-400 hover:text-white">dhirajkhedkar123@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} FitFusion. All rights reserved.
        </div>
      </div>
    </footer
    >


  )
}

export default Footer