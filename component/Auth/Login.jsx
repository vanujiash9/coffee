import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons for password visibility

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
});

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Simulate a request to check if the account exists
      const response = await fakeAuthCheck(values);
      
      if (response.success) {
        // Simulate a successful login
        Swal.fire({
          icon: 'success',
          title: 'Logged in successfully',
          text: `Welcome, ${values.name}!`,
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/coffee/menu'); // Redirect to the products page after successful login
        });
      } else {
        // Show error message if the account does not exist
        Swal.fire({
          icon: 'error',
          title: 'Login failed',
          text: response.message,
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      // Handle unexpected errors
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: 'Please try again later.',
        confirmButtonText: 'OK',
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Fake function to simulate account check
  const fakeAuthCheck = async (values) => {
    // Simulate a delay for the API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate account check
    const existingAccounts = [
      { email: 'user@example.com', password: 'Password1!' },
      // Add more test accounts if needed
    ];

    const accountExists = existingAccounts.some(
      (account) => account.email === values.email && account.password === values.password
    );

    if (accountExists) {
      return { success: true };
    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  };

  return (
    <div className={`h-screen flex justify-center items-center px-5 lg:px-0 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`max-w-screen-xl border shadow sm:rounded-lg flex justify-center flex-1 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`flex-1 text-center hidden md:flex ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1610632380989-680fe40816c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNhZmV8ZW58MHx8fDE2NjU5ODQ2Njc&ixlib=rb-1.2.1&q=80&w=1080')` }}
          />
        </div>
        <div className={`lg:w-1/2 xl:w-5/12 p-6 sm:p-12 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold">
                Log in
              </h1>
              <p className="text-sm">
                {/* You can add a description here */}
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <Formik
                initialValues={{ name: '', email: '', phone: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="mx-auto max-w-xs flex flex-col gap-4">
                    <Field
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className={`w-full px-5 py-3 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-100 text-black'}`}
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
                    
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full px-5 py-3 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-100 text-black'}`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />

                    <Field
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone"
                      className={`w-full px-5 py-3 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-100 text-black'}`}
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-xs" />

                    <div className="relative">
                      <Field
                        name="password"
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Password"
                        className={`w-full px-5 py-3 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-100 text-black'}`}
                      />
                      <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? (
                          <FaEyeSlash className="text-gray-500" />
                        ) : (
                          <FaEye className="text-gray-500" />
                        )}
                      </span>
                      <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Log in</span>
                    </button>
                    
                    <p className="mt-6 text-xs text-gray-600 text-center">
                      Do not have an account? <Link to="/coffee/register" className="text-blue-500 hover:underline">Sign up</Link>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-5 right-5">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${darkMode ? 'bg-blue-900' : 'bg-gray-200'}`}
          >
            <span
              className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out ${darkMode ? 'translate-x-full' : ''}`}
            ></span>
          </div>
          <span className="ml-3 text-gray-500">{darkMode ? 'Dark' : 'Light'}</span>
        </label>
      </div>
    </div>
  );
};

export default Login;
