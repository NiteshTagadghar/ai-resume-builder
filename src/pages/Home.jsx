import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import secondTemplate from '../utils/templatesQuestions/template_2'
import { templates, TEMPLATES_ID } from "../constant";
import { useDispatch } from "react-redux";
import { updateStoreData } from "../features/formDataSlice";
import { selectTemplateQuestions } from "../utils/commonFunctions/onTemplateSelect";


function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate()


  const dispatch = useDispatch()

  // Update store with template questions and navigate to form
  function onTemplateClick(template) {

    const questions = selectTemplateQuestions(template)
    dispatch(updateStoreData(questions))

    navigate("/userDetails")


  }




  return (
    <div className={`${darkMode ? "bg-[#0b0b1a] text-white" : "bg-linear-to-br from-[#f9fafb] to-[#eef1f5] text-gray-900"} pb-8 min-h-screen transition-all duration-500`}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 backdrop-blur-md bg-white/10 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold tracking-tight bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          ResumeCraft
        </h1>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium border px-4 py-1.5 rounded-xl hover:bg-indigo-500 hover:text-white transition">
            Login
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 text-white dark:bg-gray-800 hover:scale-110 transition"
          >
            {darkMode ? <IoSunnyOutline size={18} /> : <IoMoon size={18} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16 px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Craft Your <span className="text-indigo-500">Perfect Resume</span> in Minutes
        </h2>
        <p className="max-w-xl text-gray-600 dark:text-gray-300 mb-10">
          Choose a stunning template, fill your details, and land your dream job effortlessly.
        </p>

        {/* Templates */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          {templates.map((t) => (
            <div
              key={t.id}
              className={`relative rounded-2xl overflow-hidden shadow-md hover:scale-105 transition duration-300 cursor-pointer ${t.locked ? "opacity-60" : ""
                }`}
              onClick={() => onTemplateClick(t)}
            >
              <img src={t.src} alt={`Template ${t.id}`} className="w-full h-auto" />
              {t.locked && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <FaLock size={30} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}

      </section>
    </div>
  )
}

export default Home