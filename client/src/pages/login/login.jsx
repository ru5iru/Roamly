import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import img1 from '../../assets/images/img1.jpg';

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/");
        } catch (error) {
            setErr(error.response ? error.response.data : "An error occurred");
        }
    };

    return (
        <section className="ltext-center">
            <div className="lcontainer">
                <div className="lcontainer-body">
                    <div className="lcontainer-content">
                        <div className="lcard">
                            <div className="lcard-body">
                                <h2 className="ltitle">Login</h2>
                                <form>
                                    <div className="lrow">
                                        <div className="lform-outline">
                                            <input
                                                type="email"
                                                id="form3Example3"
                                                className="lform-control"
                                                placeholder="Email address"
                                                name="email"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="lform-outline">
                                            <input
                                                type="password"
                                                id="form3Example4"
                                                className="lform-control"
                                                placeholder="Password"
                                                name="password"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    {err && <div className="lerror">{err}</div>}
                                    <div className="lform-outline">
                                        <button type="submit" className="lbtn" onClick={handleLogin}>
                                            LOGIN
                                        </button>
                                    </div>

                                    <div className="ltext-left">
                                        <p className="lsub">
                                            <Link to="/forgot-password" className="fw-bold" style={{ color: '#1E89EF' }}>
                                                Forgot password?
                                            </Link>
                                        </p>
                                        <p className="lsub" style={{ color: '#9B9A9A' }}>
                                            Don't have an account?{' '}
                                            <Link to="/signup" className="fw-bold" style={{ color: '#1E89EF' }}>
                                                Sign Up
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="lcontainer-img">
                        <img src={img1} className="limg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
