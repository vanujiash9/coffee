import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Nhập Yup để xác thực
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Lược đồ xác thực sử dụng Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('Họ là bắt buộc'),
  lastName: Yup.string().required('Tên là bắt buộc'),
  email: Yup.string().email('Địa chỉ email không hợp lệ').required('Email là bắt buộc'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Số điện thoại phải có đúng 10 chữ số')
    .required('Số điện thoại là bắt buộc'),
  password: Yup.string()
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(/[a-z]/, 'Mật khẩu phải chứa ít nhất một chữ cái thường')
    .matches(/[A-Z]/, 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa')
    .matches(/[0-9]/, 'Mật khẩu phải chứa ít nhất một chữ số')
    .matches(/[\W_]/, 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt')
    .required('Mật khẩu là bắt buộc'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
    .required('Xác nhận mật khẩu là bắt buộc'),
});

const Register = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Mô phỏng yêu cầu kiểm tra tài khoản
      const response = await fakeAccountCheck(values);

      if (response.success) {
        // Mô phỏng đăng ký thành công
        Swal.fire({
          icon: 'success',
          title: 'Đăng ký thành công',
          text: `Chào mừng, ${values.firstName}!`,
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/coffee/login');
          }
        });
      } else {
        // Hiển thị thông báo lỗi nếu tài khoản đã tồn tại
        Swal.fire({
          icon: 'error',
          title: 'Đăng ký không thành công',
          text: response.message,
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      // Xử lý lỗi không mong muốn
      Swal.fire({
        icon: 'error',
        title: 'Có gì đó không ổn',
        text: 'Vui lòng thử lại sau.',
        confirmButtonText: 'OK',
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Hàm mô phỏng kiểm tra tài khoản
  const fakeAccountCheck = async (values) => {
    // Mô phỏng độ trễ cho yêu cầu API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mô phỏng kiểm tra tài khoản
    const existingAccounts = [
      { email: 'user@example.com' },
      // Thêm nhiều tài khoản thử nghiệm nếu cần
    ];

    const accountExists = existingAccounts.some(
      (account) => account.email === values.email
    );

    if (accountExists) {
      return { success: false, message: 'Tài khoản đã tồn tại với email này' };
    } else {
      // Lưu dữ liệu người dùng vào localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        password: values.password,
      });
      localStorage.setItem('users', JSON.stringify(users));
      
      // Lưu tên đầy đủ để dễ dàng lấy ra
      localStorage.setItem('userFullName', `${values.firstName} ${values.lastName}`);

      return { success: true };
    }
  };

  return (
    <div className={`flex flex-col justify-center items-center w-full h-screen ${darkMode ? 'bg-[#282D2D]' : 'bg-[#F0F0F0]'} px-5`}>
      <div className="flex flex-col items-end justify-start overflow-hidden mb-2 xl:max-w-3xl w-full">
        <div className="flex items-center">
          <h3 className={`${darkMode ? 'text-white' : 'text-black'}`}>Chế độ tối: &nbsp;</h3>
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
      <div className={`xl:max-w-3xl ${darkMode ? 'bg-black' : 'bg-white'} w-full p-5 sm:p-10 rounded-md`}>
        <h1 className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
          Đăng ký tài khoản miễn phí
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
                    placeholder="Họ của bạn"
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"}`}
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs" />
                  
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Tên của bạn"
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"}`}
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs" />
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Nhập email của bạn"
                  className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"}`}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />

                <Field
                  name="phone"
                  type="tel"
                  placeholder="Nhập số điện thoại của bạn"
                  className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"}`}
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-xs" />

                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"}`}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-2 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-500" />
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />

                <div className="relative">
                  <Field
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Xác nhận mật khẩu"
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"}`}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-2 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-gray-500" />
                  </button>
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-5 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-400`}
                >
                  {isSubmitting ? 'Đang xử lý...' : 'Đăng ký'}
                </button>
                <div className="text-center">
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Đã có tài khoản? <Link to="/coffee/login" className="text-blue-600 hover:underline">Đăng nhập</Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
