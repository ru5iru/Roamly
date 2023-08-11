import React, { useState } from "react";
import "./signupSP.scss";
import img2 from "../../images/img2.jpg";

export const Signup = () => {
   const [serviceType, setServiceType] = useState("");
   const [type, setType] = useState("");
   const [typeOptions, setTypeOptions] = useState([]);

   const handleServiceTypeChange = (e) => {
      const selectedService = e.target.value;
      setServiceType(selectedService);

      // Set the available type options based on the selected service
      const availableTypes = getAvailableTypes(selectedService);
      setTypeOptions(availableTypes);
   };

   const getAvailableTypes = (service) => {
      // Define the available types for each service
      const availableTypesMap = {
         Accommodation: [
            "Hotel",
            "Hostel",
            "Bed and breakfast",
            "Guesthouse",
            "Villa",
            "Apartment",
            "Cabin",
         ],
         "Travel guide": [], // Empty array for Travel guide
         "Taxi service": ["Car", "SUV", "Van", "Tuk", "Mortor cycle"],
         Shop: [
            "Cafe",
            "Restaurent",
            "Grocery",
            "Super market",
            "Camping goods",
            "Surfing goods",
         ],
      };

      // Retrieve the available types for the selected service
      return availableTypesMap[service] || [];
   };

   const renderTypeField = () => {
      if (serviceType === "Travel guide") {
         return (
            <div className="spform-outline-2">
               <input
                  type="text"
                  id="form3Example2"
                  className="spform-control"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Type"
                  style={{
                     fontFamily: "'Familjen Grotesk', sans-serif",
                     fontSize: "0.9rem",
                  }}
               />
            </div>
         );
      } else {
         return (
            <div className="spform-outline-2">
               <select
                  id="form3Example2"
                  className="spform-control"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  style={{
                     fontFamily: "'Familjen Grotesk', sans-serif",
                     fontSize: "0.9rem",
                  }}
                  disabled={typeOptions.length === 0}
               >
                  <option value="">Select Type</option>
                  {typeOptions.map((option) => (
                     <option key={option} value={option}>
                        {option}
                     </option>
                  ))}
               </select>
            </div>
         );
      }
   };

   return (
      <section className="sptext-center">
         <div className="spcontainer">
            <div className="spcontainer-body">
               <div className="spcontainer-content">
                  <div className="spcard">
                     <div className="spcard-body">
                        <h2 className="sptitle">Sign Up as a Service</h2>
                        <form>
                           <div className="sprow ">
                              <div className="spcol">
                                 <div className="spform-outline-11">
                                    <input
                                       type="text"
                                       id="form3Example1"
                                       className="spform-control"
                                       placeholder="First name"
                                       style={{
                                          fontFamily:
                                             "'Familjen Grotesk', sans-serif",
                                          fontSize: "0.9rem",
                                       }}
                                    />
                                 </div>
                              </div>
                              <div className="spcol">
                                 <div className="spform-outline-12">
                                    <input
                                       type="text"
                                       id="form3Example2"
                                       className="spform-control"
                                       placeholder="Last name"
                                       style={{
                                          fontFamily:
                                             "'Familjen Grotesk', sans-serif",
                                          fontSize: "0.9rem",
                                       }}
                                    />
                                 </div>
                              </div>
                              <div className="spform-outline-2">
                                 <input
                                    type="text"
                                    id="form3Example2"
                                    className="spform-control"
                                    placeholder="Service name"
                                    style={{
                                       fontFamily:
                                          "'Familjen Grotesk', sans-serif",
                                       fontSize: "0.9rem",
                                    }}
                                 />
                              </div>
                              <div className="spform-outline-2">
                                 <select
                                    id="form3Example2"
                                    className="spform-control"
                                    value={serviceType}
                                    onChange={handleServiceTypeChange}
                                    style={{
                                       fontFamily:
                                          "'Familjen Grotesk', sans-serif",
                                       fontSize: "0.9rem",
                                    }}
                                 >
                                    <option value="">Select Service</option>
                                    <option value="Accommodation">
                                       Accommodation
                                    </option>
                                    <option value="Travel guide">
                                       Travel guide
                                    </option>
                                    <option value="Taxi service">
                                       Taxi service
                                    </option>
                                    <option value="Shop">Shop</option>
                                 </select>
                              </div>

                              <div className="spform-outline-2">
                                 {renderTypeField()}
                                 <div className="spform-outline-2">
                                    <input
                                       type="text"
                                       id="form3Example2"
                                       className="spform-control"
                                       placeholder="Location"
                                       style={{
                                          fontFamily:
                                             "'Familjen Grotesk', sans-serif",
                                          fontSize: "0.9rem",
                                       }}
                                    />
                                 </div>
                                 <div className="spform-outline-2">
                                    <input
                                       type="email"
                                       id="form3Example3"
                                       className="spform-control"
                                       placeholder="Email address"
                                       style={{
                                          fontFamily:
                                             "'Familjen Grotesk', sans-serif",
                                          fontSize: "0.9rem",
                                       }}
                                    />
                                 </div>
                                 <div className="spform-outline-2">
                                    <input
                                       type="password"
                                       id="form3Example4"
                                       className="spform-control"
                                       placeholder="Password"
                                       style={{
                                          fontFamily:
                                             "'Familjen Grotesk', sans-serif",
                                          fontSize: "0.9rem",
                                       }}
                                    />
                                 </div>
                                 <div className="spform-outline-2">
                                    <input
                                       type="password"
                                       id="form3Example4"
                                       className="spform-control"
                                       placeholder="Confirm Password"
                                       style={{
                                          fontFamily:
                                             "'Familjen Grotesk', sans-serif",
                                          fontSize: "0.9rem",
                                       }}
                                    />
                                 </div>
                              </div>
                              <div className="spform-outline-3">
                                 <button
                                    type="submit"
                                    className="spbtn"
                                    style={{
                                       fontFamily:
                                          "'Familjen Grotesk', sans-serif",
                                       width: "387px",
                                       fontSize: "0.9rem",
                                    }}
                                 >
                                    SIGNUP
                                 </button>
                              </div>

                              <div className="sptext-left">
                                 <p
                                    className="spsub"
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
                                 <p className="spsub">
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
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="spcontainer-img">
                  <img src={img2} className="spimg" alt="" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Signup;
