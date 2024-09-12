import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[\W_]/, 'Password must contain at least one special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const Register = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    Swal.fire({
      icon: 'success',
      title: 'Registered successfully',
      text: `Welcome, ${values.firstName}!`,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/coffee/login');
      }
    });
    setSubmitting(false);
  };

  return (
    <div className={`flex flex-col justify-center items-center w-full h-[100vh] ${darkMode ? 'bg-[#282D2D]' : 'bg-[#F0F0F0]'} px-5`}>
      <div className="flex flex-col items-end justify-start overflow-hidden mb-2 xl:max-w-3xl w-full">
        <div className="flex items-center">
          <h3 className={`${darkMode ? 'text-white' : 'text-black'}`}>Dark Mode : &nbsp;</h3>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div
              className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
            ></div>
          </label>
        </div>
      </div>
      <div
        className={`xl:max-w-3xl ${
          darkMode ? "bg-black" : "bg-white"
        } w-full p-5 sm:p-10 rounded-md`}
      >
        <h1
          className={`text-center text-xl sm:text-3xl font-semibold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Register for a free account
        </h1>
        <div className="w-full mt-8">
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Your first name"
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode
                        ? "bg-[#302E30] text-white focus:border-white"
                        : "bg-gray-100 text-black focus:border-black"
                    }`}
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs" />
                  
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode
                        ? "bg-[#302E30] text-white focus:border-white"
                        : "bg-gray-100 text-black focus:border-black"
                    }`}
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs" />
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                    darkMode
                      ? "bg-[#302E30] text-white focus:border-white"
                      : "bg-gray-100 text-black focus:border-black"
                  }`}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />

                <Field
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                    darkMode
                      ? "bg-[#302E30] text-white focus:border-white"
                      : "bg-gray-100 text-black focus:border-black"
                  }`}
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-xs" />

                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode
                        ? "bg-[#302E30] text-white focus:border-white"
                        : "bg-gray-100 text-black focus:border-black"
                    }`}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 11.5A4.5 4.5 0 0112.5 16 4.5 4.5 0 017 11.5 4.5 4.5 0 0112.5 7a4.5 4.5 0 015 4.5M2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16a6 6 0 01-6-6 6 6 0 0112 0 6 6 0 01-6 6zm0-8a2 2 0 00-2 2 2 2 0 004 0 2 2 0 00-2-2z" />
                      </svg>
                    )}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />

                <div className="relative">
                  <Field
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode
                        ? "bg-[#302E30] text-white focus:border-white"
                        : "bg-gray-100 text-black focus:border-black"
                    }`}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 11.5A4.5 4.5 0 0112.5 16 4.5 4.5 0 017 11.5 4.5 4.5 0 0112.5 7a4.5 4.5 0 015 4.5M2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16a6 6 0 01-6-6 6 6 0 0112 0 6 6 0 01-6 6zm0-8a2 2 0 00-2 2 2 2 0 004 0 2 2 0 00-2-2z" />
                      </svg>
                    )}
                  </button>
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Register</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link to="/coffee/login">
                    <span className="text-[#E9522C] font-semibold">Login</span>
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
