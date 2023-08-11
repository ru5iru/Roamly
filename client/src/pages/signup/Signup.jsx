import React, { useState } from "react";
import "./signup.scss";
import img2 from "../../assets/images/img2.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

export const Signup = () => {
   const [inputs, setInputs] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   const [err, setErr] = useState(null);

   const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleClick = async (e) => {
      e.preventDefault();
      try {
         await axios.post(
            "http://localhost:8000/server/users/register",
            inputs
         );
      } catch (err) {
         setErr(err.response.data);
      }
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
                        <form>
                           <div className="srow ">
                              <div className="scol">
                                 <div className="sform-outline-11">
                                    <input
                                       type="text"
                                       id="form3Example1"
                                       name="firstname" //or just putting this line is enough to access db
                                       className="sform-control"
                                       placeholder="First name"
                                       onChange={handleChange}
                                       style={{
                                          fontFamily:
                                             "'Familjen Grotesk', sans-serif",
                                          fontSize: "0.9rem",
                                       }}
                                    />
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
                                             "'Familjen Grotesk', sans-serif",
                                          fontSize: "0.9rem",
                                       }}
                                    />
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
                                          "'Familjen Grotesk', sans-serif",
                                       fontSize: "0.9rem",
                                    }}
                                 />
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
                                          "'Familjen Grotesk', sans-serif",
                                       fontSize: "0.9rem",
                                    }}
                                 />
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
                                          "'Familjen Grotesk', sans-serif",
                                       fontSize: "0.9rem",
                                    }}
                                 />
                                 {err && err}
                              </div>
                           </div>
                           <div className="sform-outline-3">
                              <button
                                 type="submit"
                                 className="sbtn"
                                 onClick={handleClick}
                                 style={{
                                    fontFamily:
                                       "'Familjen Grotesk', sans-serif",
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
                                       "'Familjen Grotesk', sans-serif",
                                    color: "#9B9A9A",
                                 }}
                              >
                                 Already registered?{" "}
                                 <a
                                    href="/login"
                                    className="fw-bold"
                                    style={{
                                       fontFamily:
                                          "'Familjen Grotesk', sans-serif",
                                       color: "#1E89EF",
                                       fontSize: "0.9rem",
                                    }}
                                 >
                                    Login
                                 </a>
                              </p>
                              <p className="ssub">
                                 <a
                                    href="/signupService"
                                    className="fw-bold"
                                    style={{
                                       fontFamily:
                                          "'Familjen Grotesk', sans-serif",
                                       color: "#1E89EF",
                                       fontSize: "0.9rem",
                                    }}
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
                  <img src={img2} className="simg" alt="" />
               </div>
            </div>
         </div>
      </section>
   );
};
export default Signup;