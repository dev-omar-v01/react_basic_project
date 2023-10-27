import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Singup() {

    const formik =useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
          },
          validationSchema:yup.object({
            name:yup.string().min(2,"Name must have atleast 2 Charectar").required(),
            email:yup.string().email().required(),
            password:yup.string().min(6,"password bust have atleast 6 Charectar").required(),

          }),
          onSubmit:(value,{resetForm})=>{
            console.log(value);
            resetForm({value: ""})
          }

    })
  const renderName = formik.touched.name && 
       formik.errors.name &&  (
    <spam>{formik.errors.name}</spam>
  );
  const renderEmail = formik.touched.email && 
  formik.errors.email &&  (
<spam>{formik.errors.email}</spam>
);
const renderPassword = formik.touched.password && 
formik.errors.password &&  (
<spam>{formik.errors.password}</spam>
);

const renderForm = (
    <form action='' onClick={formik.handleSubmit}>
    <div>
    <label htmlFor="name">Name : </label>
    <input value={formik.values.name} onChange={formik.handleChange} type='text' name="name" id="name" required></input>
     <br/> {renderName}
    
    </div>
     <div>
     <label htmlFor="email">Email : </label>
    <input   value={formik.values.email} onChange={formik.handleChange} type='email' name="email" id="email" required></input>
    <br/> { renderEmail}
     </div>
    
    <div>
    <label htmlFor="password">password : </label>
    <input value={formik.values.password} onChange={formik.handleChange}type='password' name="password" id="password" required></input>
    <br/> {renderPassword}
    </div>
      <div>
       <button type='submit'>Registation</button>
      </div>
    </form>
);
 
    
  return (
    <div>
    <h1>SingUp Registation</h1>
    {renderForm}
   
   </div>
  )
}
