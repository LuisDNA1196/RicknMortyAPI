import React from 'react'
import '../Estilos/Loginform.css'
import useForm from '../Hooks/useForm'

function Loginform() {

  const initialData = {
    name:'',
    email:''
  }

  const onValidate = (form) =>{
    let errors = {}
    let regexName = /^[A-Za-z ]{2,}$/;
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!form.name.trim()){
      errors.name = 'Name field can not be empty'
    } else if (!regexName.test(form.name)){
      errors.name = 'Name field should be only characters'
    }

    if (!form.email.trim()){
      errors.email = 'Email field can not be empty'
    } else if (!regexEmail.test(form.email)){
      errors.email = 'Please enter a valid email address'
    }

    return errors
}

const {form, errors, handleBlur, handleChange, handleSubmit} = useForm (initialData, onValidate);


return (
  <div className='login-container'>
    <form className='login-container-wrapper'onSubmit={handleSubmit}>
      <h2>Welcome!</h2>
      <label className='login-label'>Name</label>
      <input className='login-input' type="text" name='name' onBlur={handleBlur} value={form.name} onChange={handleChange}/>
      {errors.name && <div className='error-message'>{errors.name}</div>}

      <label className='login-label'>Email</label>
      <input className='login-input' type="email" name='email' onBlur={handleBlur} value={form.email} onChange={handleChange} />
      {errors.email && <div className='error-message'>{errors.email}</div>}

      <button type="submit">Log in</button>
    </form> 
  </div>
)
}

export default Loginform