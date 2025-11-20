



import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateData, updateFormRender, updateStoreData } from '../features/formDataSlice'
import { FORM_SECTIONS } from '../constant'
import { useNavigate } from 'react-router-dom'
import RenderingBasicForm from './RenderBasicForm'

function FormContainer() {

    const currentForm = useSelector((state) => state.formData.currentForm)
    const renderingArray = useSelector((state) => state.formData.renderingQuestions)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    // On submit of form
    function getData(e) {
        e.preventDefault()

        if(currentForm === FORM_SECTIONS.EDUCATION){
            navigate('/preview')
        }else{
          // Data update in store
          dispatch(updateFormRender())

        }


    }


    // Update answer for each question in store
    function inputChange(text, item) {

        dispatch(updateData(
            {
                answer: text,
                questionId: item.id,
                section: currentForm,
                // subSectionKey : 
            }))

    }


    // If page refreshes take stored data from local storage and update the store
    useEffect(()=>{

        if(localStorage.getItem("userData")){
          // Step 1 : Get data and parse it
          const localStorageData = JSON.parse(localStorage.getItem("userData"))


          // Step 2 : Update data in
          dispatch(updateStoreData(localStorageData))
        }
    },[])      




    return (
        <div>
            <form className="max-w-md mx-auto" onSubmit={getData}>

            {Array.isArray(renderingArray)  ?  <RenderingBasicForm questions = {renderingArray} inputChange={inputChange} /> : <h1>Shubham pick up the task</h1> }


                {/* Submit */}
                <button
                    type="submit"
                    className="text-white bg-green-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                    {currentForm === FORM_SECTIONS.EDUCATION ? "Submit" : "Next"}
                </button>
            </form>
        </div>
    )
}

export default FormContainer