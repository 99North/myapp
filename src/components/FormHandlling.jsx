import React, { useState } from 'react'

function FormHandlling() {
    // useState is used to create a state variable and a function to update it.
    // formData is the state variable which is used to store the form data.
    // setFormData is the function to update the formData state variable.
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    

    // handleChange is the function which is used to handle the change in the input fields.
    const handleChange = (e) => {
        // e.target.name is the name of the input field which is targeted by the onChange event.
        // e.target.value is the value of the input field which is targeted by the onChange event whatever the user inputs.
        // ...formData is the spread operator which is used to copy the existing formData object.
        // [e.target.name]: e.target.value is the new value of the input field which is targeted by the onChange event whatever the user inputs. If a single input field is targeted then it is accessed by [e.target.name] but if multiple input fields are targeted then it is accessed by [e.target.name] and [e.target.value]
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        // Prevents the form from refreshing the page on submit.
        e.preventDefault()
        console.log('Form Data:', formData)
    }

  return (
    <div>
        <h1>Form Handlling</h1>
        <form onSubmit={handleSubmit}>
            {/* name, email, password are the names of the input fields which is targeted by e.target.name */}
            <input type="text" placeholder="Enter your name" name='name' onChange={handleChange} />
            <input type="email" placeholder="Enter your email" name='email' onChange={handleChange} />
            <input type="password" placeholder="Enter your password" name='password' onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormHandlling