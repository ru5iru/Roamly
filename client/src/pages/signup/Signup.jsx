import React, { useRef, useState } from "react";
import "./signup.scss";
import img10 from "../../assets/images/img10.jpg";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import validator from "validator";
import { db } from "../../../src/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from 'uuid'

export const Signup = () => {
   const [inputs, setInputs] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
   });
   const [success, setSuccess] = useState(false);

   const navigate = useNavigate();

   const [err, setErr] = useState(null);
   const [validationErrors, setValidationErrors] = useState({});

   const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleClick = async (e) => {
      e.preventDefault();

      // Perform frontend validations
    const errors = {};
    if (!inputs.firstname) {
      errors.firstName = "First name is required";
    }
    if (!inputs.lastname) {
      errors.lastName = "Last name is required";
    }
    if (!inputs.email) {
      errors.email = "Email is required";
    } else if (!validator.isEmail(inputs.email)) {
      errors.email = "Invalid email address";
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!inputs.password) {
      errors.password = "Password is required";
    } else if (!passwordPattern.test(inputs.password)) {
      errors.password =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    if (!inputs.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (inputs.confirmPassword !== inputs.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors({});


      // try {
      //   // Send signup data
      //   await axios.post("http://localhost:8000/server/users/register", inputs);
  
      //   // Send verification email
      //   await axios.post(
      //     "http://localhost:8000/server/users/sendVerificationEmail",
      //     { email: inputs.email } // Wrap the email in an object
      //   );
      // } catch (err) {
      //   setErr(err.response.data);
      // }

      try {
         // Send signup data
         await axios.post("http://localhost:8000/server/users/register", inputs);

   
         // Send verification email
         await axios.post(
           "http://localhost:8000/server/users/sendVerificationEmail",
           { email: inputs.email }

         )
         .then(response => {
         // Display an alert when the email is successfully sent
         if (response.data.success) {
            alert("Email has been sent!");  //have to put toast
         } else {
            alert("Email has been sent!");
         }
         })

         
         .catch(error => {
         console.error("Error sending email:", error);
         });
   
         // If both requests are successful, update success state
         setSuccess(true);
         setErr(null); // Clear any previous errors

         // const uid = useRef.push().key;
         await setDoc(doc(db,"users",inputs.email),{
            id:uuid(),
            firstname: inputs.firstname,
            lastname: inputs.lastname,
            email: inputs.email,
         })

         await setDoc(doc(db,"userChats",inputs.email), {});

         
       } catch (err) {
         // Handle the error
         console.error("Error:", err);
   
         // Update error state with a user-friendly message
         setErr("An error occurred during registration.");
       }
   };
   };

   console.log(err);

   return (
      <section className="stext-center">
         <div className="scontainer">
            <div className="scontainer-body">
               <div className="scontainer-content">
                  <div className="scard">
                     <div className="scard-body">
                        <h2 className="stitle">Sign Up</h2>
                        <form id="form">
                           <div className="srow ">
                              <div className="scol">
                                 <div className="sform-outline-11">
                                    <input
                                       type="text"
                                       id="form3Example1"
                                       name="firstname" 
                                       className="sform-control"
                                       placeholder="First name"
                                       onChange={handleChange}
                                       style={{
                                          fontFamily:
                                             "'Fira Sans', sans-serif",
                                          fontSize: "0.9rem",
                                       }}
                                    />
                                    {validationErrors.firstName && (
                                       <div className="error-msg" style={{
                                       color: "red",
                                       fontSize: "0.7rem",
                                       fontFamily: "'Fira Sans', sans-serif",
                                       }}>
                                          {validationErrors.firstName}
                                       </div>
                                    )}
                                 </div>
                              </div>
                              <div className="scol">
                                 <div className="sform-outline-12">
                                    <input
                                       type="text"
                                       id="form3Example2"
                                       name="lastname"
                                       className="sform-control"
                                       placeholder="Last name"
                                       onChange={handleChange}
                                       style={{
                                          fontFamily:
                                             "'Fira Sans', sans-serif",
                                          fontSize: "0.9rem",
                                       }}
                                    />
                                    {validationErrors.lastName && (
                                       <div className="error-msg" style={{
                                          color: "red",
                                          fontSize: "0.7rem",
                                          fontFamily: "'Fira Sans', sans-serif",
                                       }}>
                                          {validationErrors.lastName}
                                       </div>
                                    )}
                                 </div>
                              </div>
                              <div className="sform-outline-2">
                                 <input
                                    type="email"
                                    id="form3Example3"
                                    name="email"
                                    className="sform-control"
                                    placeholder="Email address"
                                    onChange={handleChange}
                                    style={{
                                       fontFamily:
                                          "'Fira Sans', sans-serif",
                                       fontSize: "0.9rem",
                                    }}
                                 />
                                 {validationErrors.email && (
                                    <div className="error-msg" style={{
                                    color: "red",
                                    fontSize: "0.7rem",
                                    fontFamily: "'Fira Sans', sans-serif",
                                    }}>
                                    {validationErrors.email}</div>
                                 )}
                              </div>
                              <div className="sform-outline-2">
                                 <input
                                    type="password"
                                    id="form3Example4"
                                    name="password"
                                    className="sform-control"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    style={{
                                       fontFamily:
                                          "'Fira Sans', sans-serif",
                                       fontSize: "0.9rem",
                                    }}
                                 />
                                 {validationErrors.password && (
                                    <div className="error-msg" style={{
                                       color: "red",
                                       fontSize: "0.7rem",
                                       fontFamily: "'Fira Sans', sans-serif",
                                    }}>
                                    Password must be at least 8 characters long
                                    <br />
                                    and include at least one uppercase letter,
                                    <br />
                                    one lowercase letter, one digit, and one special character.
                                    </div>
                                 )}
                              </div>
                              <div className="sform-outline-2">
                                 <input
                                    type="password"
                                    id="form3Example5"
                                    name="confirmPassword"
                                    className="sform-control"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    style={{
                                       fontFamily:
                                          "'Fira Sans', sans-serif",
                                       fontSize: "0.9rem",
                                    }}
                                 />
                                 {validationErrors.confirmPassword && (
                                    <div className="error-msg" style={{
                                    color: "red",
                                    fontSize: "0.7rem",
                                    fontFamily: "'Fira Sans', sans-serif",
                                    }}>
                                    {validationErrors.confirmPassword}
                                    </div>
                                 )}
                                 {err && <div className="error-msg">{err}</div>}
                              </div>
                           </div>
                           <div className="sform-outline-3">
                              <button
                                 type="submit"
                                 className="sbtn"
                                 onClick={handleClick}
                                 style={{
                                    fontFamily:
                                       "'Fira Sans', sans-serif",
                                    width: "100%",
                                    fontSize: "0.9rem",
                                 }}
                              >
                                 SIGNUP
                              </button>
                           </div>

                           <div className="stext-left">
                              <p
                                 className="ssub"
                                 style={{
                                    fontFamily:
                                       "'Fira Sans', sans-serif",
                                    color: "#9B9A9A",
                                 }}
                              >
                                 Already registered?{" "}
                                 <a
                                    href="/login"
                                    className="fw-bold"
                                 >
                                    Login
                                 </a>
                              </p>
                              <p className="ssub">
                                 <a
                                    href="/signupSP"
                                    className="fw-bold"
                                 >
                                    Register as a service
                                 </a>
                              </p>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="scontainer-img">
                  <img src={img10} className="simg" alt="" />
               </div>
            </div>
         </div>
      </section>
   );
};
export default Signup;