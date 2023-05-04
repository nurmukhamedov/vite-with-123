import { useState } from "react";

const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue({ [name]: value })
    }

    console.log(value)

    return [value, handleChange]
}

export default useForm;