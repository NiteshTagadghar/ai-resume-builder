
import { getInputType } from "../utils/commonFunctions/forms";

const Input = ({ item, inputChange, subsectionKey }) => {

    const inputType = getInputType(item);

    //  HANDLE CHANGE FUNCTION
    const handleChange = (value) => {
        console.log(value,item,'value and item')
        inputChange(value, item,subsectionKey);
    };

   //  DROPDOWN SUPPORT (12th / Diploma)
    if (item.element === "select") {
        return (
            <div>
                <select
                    value={item.answer || ""}
                    onChange={(e) => handleChange(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border-2 rounded-lg text-black
                       hover:border-purple-600 focus:border-purple-600 
                       border-gray-300"
                >
                    {/* ADD THIS PLACEHOLDER OPTION */}
                    <option value="" disabled>
                        -- Select --
                    </option>
                    
                    {item.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
    //  TEXTAREA
    if (inputType === "textarea") {
        return (
            <div>
                <textarea
                    value={item.answer || ""}
                    onChange={(e) => handleChange(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg 
                     focus:ring-2 focus:ring-green-500 
                     border-gray-300"
                    rows="4"
                />
            </div>
        );
    }

    //  NORMAL INPUT
    return (
        <div>
            <input
                type={inputType}
                value={item.answer || ""}
                onChange={(e) => handleChange(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border-2 rounded-lg text-black
                   hover:border-purple-600 focus:border-purple-600 
                   border-gray-300"
                maxLength={item.maxLength}
            />
        </div>
    );
};

export default Input;