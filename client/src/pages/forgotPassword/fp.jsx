import React, { useState } from "react";
import "./fp.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ForgotPW = () => {
    const [email, setEmail] = useState("");
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        // setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setEmail(e.target.value);
    }
    
    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/server/users/emailavailable", 
            {email}, 
            {
                withCredentials: true,
            });
            toast.success("Reset link sent successfully. Please check your email.");
            
        } catch (err) {
            setErr(err.response.data)

            // Display an error message with toast
            toast.error("Failed to send reset link. Please try again later.");
        } 
    }

    return(

        <div className="row-titlef">
            Enter your email address<br/><br/>
            <input type="text" name="email" className="form-inputf" onChange={handleChange} value={email}/>
            <div className="btnf">
                <a href="/forgotpwotp" style={{ textDecoration: 'none' }}>
                <button type="submit" className="buttonlf" onClick={handleClick}>
                    Next
                </button>
                </a>
            </div>
            <ToastContainer position="top-center" autoClose={6000} />
        </div>

    )
}

export default ForgotPW;