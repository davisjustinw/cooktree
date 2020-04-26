import { useState } from 'react'

function changeHandler({ target }) {
  this.setState({
    [target.name]: target.value
  })
}

function useFormInput (initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleChange = ({ target }) => {
        setValue(target.value);
    };
    return { value, onChange: handleChange };
};

export {
  changeHandler,
  useFormInput
}
