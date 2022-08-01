import React, {useState} from "react";
import { EmailPattern } from '../utils/pattern';

const useInputEmail = (initialValue : any, validator : any, inputRef : boolean) => {
    const [value, setValue] = useState(initialValue);
    const onChange = () => {
        setValue(value);

        console.dir(value.id);
        console.dir(initialValue.id);

        inputRef = EmailPattern.test(value);
    }

    return { value, onChange, inputRef };
}

export default useInputEmail;