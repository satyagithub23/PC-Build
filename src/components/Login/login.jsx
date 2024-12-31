import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify'
import './login.css'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e.target);
        const { email, password } = formData
        console.log("Login form submitted");
        console.log("Submitted email: " + email);
        console.log("Submitted password: " + password);

        setFormData({ email: "", password: "" })
        const response = await fetch(`http://localhost:8080/api/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            }
        )
        const data = await response.json()
        if (data.success) {
            Cookies.set('token', data.token, { path: '/', secure: true, sameSite: 'strict' })

            toast.success('Login Successful!', {
                position: 'top-right',
                autoClose: 2000,
                closeOnClick: true,
                hideProgressBar: false
            })
            setTimeout(() => {
                navigate("/")
            }, 2000);
        } else {
            console.log("Invalid credentials", data);
            toast.error('Invalid Credentials!', {
                position: 'top-right',
                autoClose: 2000,
                closeOnClick: true,
                hideProgressBar: false
            })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className='login-main-container'>
            <ToastContainer />
            <div className="login-image-container">
                <img src="/LoginImages/login.png" alt="" />
            </div>
            <div className="login-form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="email">Email:</label>
                                </td>
                                <td><input
                                    id='email'
                                    name='email'
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="passowrd">Password:</label>
                                </td>
                                <td style={{ width: '100%' }}>
                                    <div className="password-components-container">
                                        <input
                                            id='password'
                                            name='password'
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder='Passowrd'
                                            required />
                                        {/* <button><a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="24" fill='#000' viewBox="0 -960 960 960" width="24"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg></a></button> */}
                                        {/* <button><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" fill='#fff' viewBox="0 -960 960 960" width="24"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" /></svg></a></button> */}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className='login-submit-btn'>Login</button>
                </form>
                <Link to='/signup' className='signup-link'>Create a new account</Link>
            </div>
        </div>
    )
}

export default Login