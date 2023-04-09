import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../slices/CRUDslices';

const Formdata = () => {
    const dispatch = useDispatch()
    const initialStae = {
        name: "",
        email: '',
        contact: ""
    }
    const [value, setValue] = useState(initialStae);
    const handleChange = (e) => {
        e.preventDefault();
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add(value));
        setValue(initialStae)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value.name} name='name' placeholder='name' onChange={handleChange} />
                <input type="email" value={value.email} name='email' placeholder='email' onChange={handleChange} />
                <input type="text" value={value.contact} name='contact' placeholder='contact' onChange={handleChange} />
                <button>ADD</button>
            </form>
        </>
    )
}

export default Formdata
