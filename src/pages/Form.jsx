import { useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { useState } from 'react'
import ProgressBar from '../components/ProgressBar'

function Form() {

    const [submittedFormCount ,setSubmittedFormCount] = useState(1)


    return (
        <div className='min-h-screen flex flex-col items-center p-4'>

            {/* Progress Bar on TOP */}
            <div className='w-full max-w-2xl mb-6'>
                <ProgressBar submittedFormCount={submittedFormCount} />
            </div>

            {/* Render Forms */}
            <div className='w-full max-w-2xl'>
                <FormContainer setSubmittedFormCount={setSubmittedFormCount}/>
            </div>

        </div>
    )
}

export default Form