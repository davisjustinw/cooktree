import { useState } from 'react'

function changeHandler(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

function useFormInput (initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleChange = event => {
        setValue(event.target.value);
    };
    return { value, onChange: handleChange };
};

export {
  changeHandler,
  useFormInput
}
