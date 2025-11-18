import { createSlice } from "@reduxjs/toolkit";
import { FORM_SECTIONS } from "../constant";


// const initialState = {
//     intro: [
//         { displayQuestion: "First Name", id: "firstName", type: "text", answer: "" },
//         { displayQuestion: "Last Name", id: "secondName", type: "text", answer: "" },
//         { displayQuestion: "Git Link", id: "gitLink", type: "url", answer: "" },
//     ],

//     objective: [{ displayQuestion: "Objecive", id: "objective", type: "text", answer: "" }],

//     skills: [
//         { displayQuestion: "Technical Skills", id: "techSkills", type: "text", answer: "" },
//         { displayQuestion: "Soft Skills", id: "softSkills", type: "text", answer: "" },],

//     projects: {

//         project1: [{ displayQuestion: "Project Name", id: "projectName1", type: "text", answer: "" },
//         { displayQuestion: "Project Details", id: "projectDetails", type: "text", answer: "" },
//         { displayQuestion: "Skills", id: "projectSkills", type: "text", answer: "" }],


//         project2: [{ displayQuestion: "Project Name", id: "projectName2", type: "text", answer: "" },
//         { displayQuestion: "Project Details", id: "projectDetails2", type: "text", answer: "" },
//         { displayQuestion: "Skills", id: "projectSkills2", type: "text", answer: "" }],


//         project3: [{ displayQuestion: "Project Name", id: "projectName3", type: "text", answer: "" },
//         { displayQuestion: "Project Details", id: "projectDetails3", type: "text", answer: "" },
//         { displayQuestion: "Skills", id: "projectSkills3", type: "text", answer: "" }]
//     }

//     ,
//     education: [
//         { displayQuestion: "Degree", id: "degree", type: "text", answer: "" },
//     ],
//     renderingQuestions: [
//         { displayQuestion: "First Name", id: "firstName", type: "text", answer: "" },
//         { displayQuestion: "Last Name", id: "secondName", type: "text", answer: "" },
//         { displayQuestion: "Git Link", id: "gitLink", type: "url", answer: "" },


//     ],

//     currentForm: FORM_SECTIONS.INTRO
// }


const formDataSlice = createSlice({
    name: "formData",
    initialState: {},
    reducers: {

        // Update store on page load after getting data from local storage
        updateStoreData(state, action) {
            // Return new state for store
            return action.payload
        },


        // Updates state section like intro, objective, projects etc by taking these details in arguments section, questionId, answer
        updateData(state, action) {

            const section = action.payload.section
            const questionId = action.payload.questionId
            const answer = action.payload.answer
            const subSectionKey = action.payload?.subSectionKey
            // state = action.payload

            if (subSectionKey) {
                state[section][subSectionKey].forEach((item) => {
                    if (item.id === questionId) {
                        item.answer = answer
                    }
                })

                state.renderingQuestions = state[section]
            } else {


                state[section].forEach((item) => {
                    if (item.id === questionId) {
                        item.answer = answer
                    }
                })

                state.renderingQuestions = state[section]

            }

        },

        // On submit of form
        updateFormRender(state) {

            // Store user entered data on submit of each form
            localStorage.setItem("userData", JSON.stringify(state))

            if (state.currentForm === FORM_SECTIONS.INTRO) {
                state.currentForm = FORM_SECTIONS.OBJECTIVE;
                state.renderingQuestions = state.objective;
            } else if (state.currentForm === FORM_SECTIONS.OBJECTIVE) {
                state.currentForm = FORM_SECTIONS.SKILLS;
                state.renderingQuestions = state.skills;
            } else if (state.currentForm === FORM_SECTIONS.SKILLS) {

                // If experience present in template render experienct
                if (state.experience) {
                    state.currentForm = FORM_SECTIONS.EXPERIENCE;
                    state.renderingQuestions = state.experience
                }
                // If not display project section
                else {
                    state.currentForm = FORM_SECTIONS.PROJECT;
                    state.renderingQuestions = state.projects;
                }
            } else if (state.currentForm === FORM_SECTIONS.EXPERIENCE) {
                state.currentForm = FORM_SECTIONS.PROJECT;
                state.renderingQuestions = state.projects;
            }
            else if (state.currentForm === FORM_SECTIONS.PROJECT) {
                state.currentForm = FORM_SECTIONS.EDUCATION;
                state.renderingQuestions = state.education;
            }
            else if(state.currentForm === FORM_SECTIONS.EDUCATION){
                state.currentForm = FORM_SECTIONS.CERTIFICATIONS
                state.renderingQuestions = state.certifications
            }
        },

        // Clear store data
        clearStoreData(state){
            return {}
        }


    }
})

export const { updateData, updateFormRender, updateStoreData,clearStoreData } = formDataSlice.actions
export default formDataSlice.reducer
