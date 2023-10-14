import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const useForm = (initialData, onValidate) => {
        const [form, setForm] = useState(initialData);
        const [errors, setErrors] = useState({});
        const navigate = useNavigate ();


        const handleChange = (event) => {
                const { name, value } = event.target
                setForm({ ...form, [name]: value})
        }

        const handleBlur = (event) =>{
                const {name} = event.target;
                const err = onValidate(form);
                setErrors((prevErrors)=>({
                        ...prevErrors,[name] : err && err [name]
                }))
        }        

        const handleSubmit = (event) =>{
                event.preventDefault();
                const err = onValidate(form);
                setErrors(err)
              
                if (Object.keys(err).length === 0){
                  navigate('/mainprofiles');
                }
              }

  return {form, handleBlur, handleChange, handleSubmit, errors}
}

export default useForm;