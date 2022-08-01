import React, {useState} from "react";

const useInputEmail = (initialValue : any, validator : any) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event : React.KeyboardEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement> ) => {
        setValue(value)

        console.log(value);
        console.dir(event.target);
    }
    return { value, onChange };
}

export default useInputEmail;