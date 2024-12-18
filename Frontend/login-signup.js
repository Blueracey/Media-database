import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login-signup.css'; // Import your CSS file

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [mockUserData, setMockUserData] = useState([]);

  // Validation schema
  const validationSchema = Yup.object({
    firstName: isLogin ? Yup.string() : Yup.string().required('Required'),
    middleName: isLogin ? Yup.string() : Yup.string(), // Middle name is optional
    lastName: isLogin ? Yup.string() : Yup.string().required('Required'),
    phone: isLogin ? Yup.string() : Yup.string().required('Required'), // Phone is required
    birthdate: isLogin ? Yup.date() : Yup.date().required('Required'), // Birthdate is required
    email: isLogin ? Yup.string() : Yup.string().email('Invalid email').required('Required'),
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (isLogin) {
      const user = mockUserData.find(user => user.username === values.username && user.password === values.password);
      if (user) {
        alert('Sign In Successful!');
      } else {
        alert('Invalid username or password');
      }
    } else {
      const existingUser = mockUserData.find(user => user.username === values.username);
      if (existingUser) {
        alert('Username already exists');
      } else {
        setMockUserData([...mockUserData, values]);
        alert('Sign Up Successful! You can now sign in.');
        resetForm(); // Reset the form after successful signup
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
      <Formik
        initialValues={{ firstName: '', middleName: '', lastName: '', phone: '', birthdate: '', email: '', username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {!isLogin && (
              <>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <Field type="text" className="form-control" id="firstName" name="firstName" />
                  <ErrorMessage name="firstName" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="middleName" className="form-label">Middle Name</label>
                  <Field type="text" className="form-control" id="middleName" name="middleName" />
                  <ErrorMessage name="middleName" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <Field type="text" className="form-control" id="lastName" name="lastName" />
                  <ErrorMessage name="lastName" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <Field type="tel" className="form-control" id="phone" name="phone" />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="birthdate" className="form-label">Birthdate</label>
                  <Field type="date" className="form-control" id="birthdate" name="birthdate" />
                  <ErrorMessage name="birthdate" component="div" className="text-danger" />
                </div>
              </>
            )}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <Field type="text" className="form-control" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <Field type="password" className="form-control" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              {!isLogin && (
                <>
                  <label htmlFor="email" className="form-label">Email</label>
                  <Field type="email" className="form-control" id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </>
              )}
            </div>
            <button type="submit" className="btn btn-primary">{isLogin ? 'Sign In' : 'Sign Up'}</button>
          </Form>
        )}
      </Formik>
      <div className="mt-3">
        <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Already have an account? Sign In'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
