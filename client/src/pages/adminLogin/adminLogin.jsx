import './adminLogin.scss';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import ProfilePic from '../../assets/images/pfpmale.jpg';
import Image from '../../assets/images/login.jpg';


function AdminLogin() {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const { login, currentUser } = useContext(AuthContext);


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/");
        } catch (err) {
            // Check if err.response exists before accessing data
            if (err.response && err.response.data) {
                setErr(err.response.data);
            } else {
                // Handle the error without response data
                setErr("An error occurred during login.");
            }
        }
    };

    return (
        <div className="outer">
            <img src={Image} alt="login" className="bg" />
            <div className="admin_login">
                <div className="admin_login_title">
                    <p>Login to Admin Portal</p>
                </div>
                <div className="error">
                    {err && err}
                </div>

                <div className="admin_login_form">
                    <form>

                        <label
                            className="admin_login_label"
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            className="admin_login_input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={inputs.email}
                            onChange={handleChange} />

                        <label
                            className="admin_login_label"
                            htmlFor="password">
                            Password
                        </label>
                        <input
                            className="admin_login_input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={inputs.password}
                            onChange={handleChange} />

                        <p className="admin_login_forgot">Forgot Password?</p>

                        <button type="submit"
                            className='admin_login_btn'
                            onClick={handleLogin}
                        >Login
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default AdminLogin;