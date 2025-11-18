import { nanoid } from "@reduxjs/toolkit";
export const FORM_SECTIONS = {
    INTRO: "intro",
    OBJECTIVE: "objective",
    SKILLS: "skills",
    PROJECT: "project",
    EDUCATION: "education",
    EXPERIENCE: "experience",
    CERTIFICATIONS: "certifications"
}

// Projects state structur
const project = [
    {
        displayQuestion: "Project Name",
        id: nanoid(),
        type: "text",
        answer: "",
        isFilled: false,
    },
    {
        displayQuestion: "Project Description",
        id: nanoid(),
        type: "textarea",
        answer: "",
        isEditorEnabled: true,
        aiEnabled: true,
    },
    {
        displayQuestion: "Tech Stack",
        id: nanoid(),
        type: "text",
        answer: ""
    },
    { displayQuestion: "Live Link", id: nanoid(), type: "url", answer: "" }

];


export const experience = [
    {
        displayQuestion: "Company Name",
        id: nanoid(),
        type: "text",
        answer: "",
        isFilled: false,
    },
    {
        displayQuestion: "Role / Position",
        id: nanoid(),
        type: "text",
        answer: "",
    },
    {
        displayQuestion: "Start Date",
        id: nanoid(),
        type: "date",
        answer: "",
    },
    { displayQuestion: "End Date", id: nanoid(), type: "date", answer: "" },
    {
        displayQuestion: "description",
        id: nanoid(),
        type: "textarea",
        answer: "",
        isEditorEnabled: true,
        aiEnabled: true,
    },
];

const intro = [
    {
        displayQuestion: "First Name",
        id: nanoid(),
        type: "text",
        answer: "",
    },
    {
        displayQuestion: "Last Name",
        id: nanoid(),
        type: "text",
        answer: "",
    },
    { displayQuestion: "Git Link", id: nanoid(), type: "url", answer: "" },
    {
        displayQuestion: "LinkedIn Link",
        id: nanoid(),
        type: "url",
        answer: "",
    },
    { displayQuestion: "email", id: nanoid(), type: "mail", answer: "" },
    {
        displayQuestion: "Phone Number",
        id: "mobile",
        type: "number",
        answer: "",
    },
]

const objective = [
    {
        displayQuestion: "Objecive",
        id: "objective",
        type: "textarea",
        answer: "",
        isEditorEnabled: true,
        aiEnabled: true,
    },
]

const skills = {
    languages: [
        {
            displayQuestion: "Languages",
            id: nanoid(),
            type: "text",
            answer: "",
            isFilled: false,
        },
    ],
    frameworks: [
        {
            displayQuestion: "Frameworks",
            id: nanoid(),
            type: "text",
            answer: "",
            isFilled: false,
        },
    ],
    database: [
        {
            displayQuestion: "Databases ",
            id: nanoid(),
            type: "text",
            answer: "",
            isFilled: false,
            canSkip: true
        },
    ],
    others: [
        {
            displayQuestion: "Other tools ",
            id: nanoid(),
            type: "text",
            answer: "",
            isFilled: false,
            canSkip: true
        },
    ],
}

const education = {
    school: [
        {
            displayQuestion: "10th CGPA/Percentage",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "School Name",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Start Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
        {
            displayQuestion: "End Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
    ],

    higherSchool: [
        {
            displayQuestion: "12th CGPA/Percentage",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Junior College Name",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Start Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
        {
            displayQuestion: "End Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
    ],

    Degree: [
        {
            displayQuestion: "College Name",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Degree CGPA/Percentage",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        //   If key element is present then display the given element or else input or text editory
        {
            displayQuestion: "Degree Type",
            id: nanoid(),
            element: "select",
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Branch",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Start Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
        {
            displayQuestion: "End Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
    ],
}

const certifications = [
    {
        displayQuestion: "Certification Name",
        id: nanoid(),
        type: "text",
        answer: "",
    },
    {
        displayQuestion: "Verify Link",
        id: nanoid(),
        type: "url",
        answer: "",
    },

    {
        displayQuestion: "Description",
        id: nanoid(),
        type: "text",
        answer: "",
        isEditorEnabled: true,
        aiEnabled: true,

    },
]

const intership = [
    {
        displayQuestion: "Certification Name",
        id: nanoid(),
        type: "text",
        answer: "",
    },
    {
        displayQuestion: "Start Date",
        id: nanoid(),
        type: "date",
        answer: "",
    },
    {
        displayQuestion: "End Date",
        id: nanoid(),
        type: "date",
        answer: "",
    },
    {
        displayQuestion: "Description",
        id: nanoid(),
        type: "text",
        answer: "",
        isEditorEnabled: true,
        aiEnabled: true,
    }
]


export const initialState = {
    intro,

    objective,

    skills,

    projects: {
        project1: [...project],
        project2: [...project],
        project3: [...project],
    },

    education,

    certifications,

    intership,

    renderingQuestions: intro,
    currentForm: FORM_SECTIONS.INTRO
}


// Templates

export const TEMPLATES_ID = {
    TEMPLATE_1 : "template_1",
    TEMPLATE_2 : "template_2"

}

export const templates = [
    {
        id: TEMPLATES_ID.TEMPLATE_1,
        src: "https://writelatex.s3.amazonaws.com/published_ver/45943.jpeg?X-Amz-Expires=14400&X-Amz-Date=20251113T160127Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20251113/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=a2a90f36109d968d674821a8625ff960098f15af88f516c1bf2d127c4f43ed94",
    },
    { id: TEMPLATES_ID.TEMPLATE_2, src: "https://writelatex.s3.amazonaws.com/published_ver/45792.jpeg?X-Amz-Expires=14400&X-Amz-Date=20251113T161037Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20251113/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=139bab17cbe334ec7dc9d045d98091290418b17d2b37abf24c22715188d8ee9c"},
    // { id: 3, src: "https://writelatex.s3.amazonaws.com/published_ver/23504.jpeg?X-Amz-Expires=14400&X-Amz-Date=20251113T161058Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20251113/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=ff7d01639125ca42bcc47579509913529e8fccf9e29f4e896c901954b8674738", locked: false },
    // { id: 4, src: "https://writelatex.s3.amazonaws.com/published_ver/38460.jpeg?X-Amz-Expires=14400&X-Amz-Date=20251113T161110Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20251113/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=5af74041794b22823cfdcebd235f1ba25dadc7fab7e74a315620c5153f4fc43d", locked: true },
];