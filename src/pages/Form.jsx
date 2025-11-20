import { useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'

function Form() {

    const formData = useSelector((state) => state.formData)


    console.log(formData, 'form render status')
    return (
        <div className='min-h-screen flex flex-col items-center p-4'>

            {/* Progress Bar on TOP */}
            <div className='w-full max-w-2xl mb-6'>
                {/* <ProgressBar /> */}
            </div>

            {/* Render Forms */}
            <div className='w-full max-w-2xl'>
                <FormContainer />
            </div>

        </div>
    )
}

export default Form