export default function RenderingBasicForm({questions, inputChange}) {
    { console.log(questions, 'item in function') }

    return <>
    {questions.map((item, index) =>
        <div key={`${item.id}-${index}`} className=" w-full mb-5 group">
            <input
                type={item.type}
                name={item.id}
                id={item.id}
                className="block py-2.5 px-0 w-full text-2xl  text-black border-0 border-b-2 border-default-medium"
                placeholder={item.displayQuestion}
                value={item.answer}
                // required
                onChange={(e) => {
                    inputChange(e.target.value, item)

                }}
            />


                    <label
                        htmlFor={item.id}
                        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        {item.displayQuestion}
                    </label>
        </div>)}
    
    </>
}