import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Signup = ()=>{

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
          .min(8, 'Too Short!')
          .max(30, 'Too Long!')
          .required('Required')
          .matches(/^(\S+$)/g, 'spaces can not be in username'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
        .required('Required')
        .min(8,"too short")
        .max(15,"good length")
        .matches(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,"must contain special characters"),
        repassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null],'It does not match the password ! '),
        
      });

    return(
        <div className='container' >
        <h1>Signup</h1>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password:'',
            repassword:'',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (

<Form>
<Field 
    name="username"  
    class="form-control form-control-lg mb-3" 
    type="text" 
    placeholder="Write username " 
    aria-label=".form-control-lg examp "/>
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}

<Field 
    name="email" 
    type="email" class="form-control form-control-lg mb-3"  
    placeholder="E-mail@gmail.com" 
    aria-label=".form-control-lg examp " />
    <Field 
    name="password" 
    type="password" class="form-control form-control-lg mb-3"  
    placeholder="Write your password " 
    aria-label=".form-control-lg examp " />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
    <Field 
    name="repassword" 
    type="password" class="form-control form-control-lg mb-3"  
    placeholder="reWrite your password " 
    aria-label=".form-control-lg examp " />
    {errors.repassword && touched.repassword ? <div>{errors.repassword}</div> : null}
    <button type="submit">Submit</button>
</Form>
          )}
        </Formik>
      </div>
    )
}
export default Signup






