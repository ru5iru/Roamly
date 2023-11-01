import React, { useState, useEffect } from "react";
import "./signupSP.scss";
import img2 from "../../assets/images/img10.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { toast, ToastContainer } from "react-toastify";

export const SignupSP = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: "",
    servicename: "",
    servicetype: "",
    location: "",
    contact_no: "",
  });

  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

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

  const dropdownservice = (e) => {
    handleServiceTypeChange(e);
    handleChange(e);
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
        <div className="spform-outline-12">
          <input
            type="text"
            id="form3Example2"
            name="type"
            className="spform-control3"
            onChange={handleChange}
            placeholder="Languages"
          />
        </div>
      );
    } else {
      return (
        <div className="spform-outline-12">
          <select
            id="form3Example2"
            name="type"
            className="spform-control2"
            onChange={handleChange}
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

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    //  console.log(inputs);
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
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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

      try {
        // Send signup data
        await axios.post(
          "http://localhost:8000/server/users/registersp",
          inputs
        );

        // Send verification email
        await axios.post(
          "http://localhost:8000/server/users/sendVerificationEmail",
          {
            email: inputs.email,
          }
        );

        // Display a success toast
        toast.success("Check your emails!", {
          position: "top-right",
          autoClose: 5000, // You can adjust the duration
        });

        // If both requests are successful, update success state
        setSuccess(true);
        setErr(null); // Clear any previous errors
      } catch (err) {
        // Handle the error
        console.error("Error:", err);

        // Display an error toast
        toast.error("An error occurred during registration", {
          position: "top-right",
          autoClose: 5000, // You can adjust the duration
        });

        // Update error state with a user-friendly message
        setErr("An error occurred during registration.");
      }
    }
  };

  let autocomplete; // Declare the autocomplete variable
  let selectedPlace = null;
  let formatted_address;

  // Initialize the autocomplete object
  useEffect(() => {
    autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {
        types: ["geocode"],
      }
    );
    // Add a listener for the place_changed event
    autocomplete.addListener("place_changed", handlePlaceChanged);
  }, []);

  // Define a function to handle the place_changed event
  const handlePlaceChanged = () => {
    if (autocomplete != null) {
      // Get the selected place from the Autocomplete object
      selectedPlace = autocomplete.getPlace();
      
      // Check if selectedPlace is defined and has a formatted_address property
      if (selectedPlace && selectedPlace.formatted_address) {
        console.log(selectedPlace); // This will log the complete selected location data
        setInputs((prev) => ({
          ...prev,
          ["location"]: selectedPlace.formatted_address,
        }));
      }
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
                          name="firstname"
                          placeholder="First name"
                          onChange={handleChange}
                          // style={{
                          //   fontFamily: "'Familjen Grotesk', sans-serif",
                          //   fontSize: "0.9rem",
                          // }}
                        />
                        {validationErrors.firstName && (
                          <div
                            className="error-msg"
                            style={{
                              color: "red",
                              fontSize: "0.7rem",
                              fontFamily: "'Fira Sans', sans-serif",
                            }}
                          >
                            {validationErrors.firstName}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="spcol">
                      <div className="spform-outline-12">
                        <input
                          type="text"
                          id="form3Example2"
                          name="lastname"
                          className="spform-control"
                          placeholder="Last name"
                          onChange={handleChange}
                          // style={{
                          //   fontFamily: "'Familjen Grotesk', sans-serif",
                          //   fontSize: "0.7rem",
                          // }}
                        />
                        {validationErrors.lastName && (
                          <div
                            className="error-msg"
                            style={{
                              color: "red",
                              fontSize: "0.7rem",
                              fontFamily: "'Fira Sans', sans-serif",
                            }}
                          >
                            {validationErrors.lastName}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="spform-outline-2">
                      <input
                        type="text"
                        id="form3Example2"
                        name="servicename"
                        className="spform-control"
                        placeholder="Service name"
                        onChange={handleChange}
                        // style={{
                        //   fontFamily: "'Familjen Grotesk', sans-serif",
                        //   fontSize: "0.9rem",
                        // }}
                      />
                    </div>

                    <div className="spcol">
                      <div className="spform-outline-11">
                        <select
                          id="form3Example1"
                          className="spform-control1"
                          name="servicetype"
                          value={serviceType}
                          onChange={dropdownservice}
                          // style={{
                          //   fontFamily: "'Familjen Grotesk', sans-serif",
                          //   fontSize: "0.9rem",
                          // }}
                        >
                          <option value="">Select Service</option>
                          <option value="Accommodation">Accommodation</option>
                          <option value="Travel guide">Travel guide</option>
                          <option value="Taxi service">Taxi service</option>
                          <option value="Shop">Shop</option>
                        </select>
                      </div>
                    </div>

                    <div className="spcol">
                      {/* <div className="spform-outline-12"> */}
                      {renderTypeField()}
                      {/* </div> */}
                    </div>

                    <div className="spform-outline-2">
                      <input
                        type="text"
                        id="autocomplete"
                        name="location"
                        className="spform-control"
                        placeholder="Location"
                        onChange={handlePlaceChanged}
                        // style={{
                        //   fontFamily: "'Familjen Grotesk', sans-serif",
                        //   fontSize: "0.9rem",
                        // }}
                      />
                    </div>

                    <div className="spform-outline-2">
                      <input
                        type="text"
                        id="form3Example3"
                        name="contact_no"
                        className="spform-control"
                        placeholder="Contact Number"
                        onChange={handleChange}
                        // style={{
                        //   fontFamily: "'Familjen Grotesk', sans-serif",
                        //   fontSize: "0.9rem",
                        // }}
                      />
                    </div>

                    <div className="spform-outline-2">
                      <input
                        type="email"
                        id="form3Example3"
                        name="email"
                        className="spform-control"
                        placeholder="Email address"
                        onChange={handleChange}
                        // style={{
                        //   fontFamily: "'Familjen Grotesk', sans-serif",
                        //   fontSize: "0.9rem",
                        // }}
                      />
                      {validationErrors.email && (
                        <div
                          className="error-msg"
                          style={{
                            color: "red",
                            fontSize: "0.7rem",
                            fontFamily: "'Fira Sans', sans-serif",
                          }}
                        >
                          {validationErrors.email}
                        </div>
                      )}
                    </div>

                    <div className="spcol">
                      <div className="spform-outline-11">
                        <input
                          type="password"
                          name="password"
                          id="form3Example4"
                          className="spform-control"
                          placeholder="Password"
                          onChange={handleChange}
                          // style={{
                          //   fontFamily: "'Familjen Grotesk', sans-serif",
                          //   fontSize: "0.9rem",
                          // }}
                        />
                        {validationErrors.password && (
                          <div
                            className="error-msg"
                            style={{
                              color: "red",
                              fontSize: "0.7rem",
                              fontFamily: "'Fira Sans', sans-serif",
                            }}
                          >
                            Password must be at least 8 characters long
                            <br />
                            and include at least one uppercase letter,
                            <br />
                            one lowercase letter, one digit, and one special
                            character.
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="spcol">
                      <div className="spform-outline-12">
                        <input
                          type="password"
                          id="form3Example4"
                          name="confirmPassword"
                          className="spform-control"
                          placeholder="Confirm Password"
                          onChange={handleChange}
                          // style={{
                          //   fontFamily: "'Familjen Grotesk', sans-serif",
                          //   fontSize: "0.9rem",
                          // }}
                        />
                        {validationErrors.confirmPassword && (
                          <div
                            className="error-msg"
                            style={{
                              color: "red",
                              fontSize: "0.7rem",
                              fontFamily: "'Fira Sans', sans-serif",
                            }}
                          >
                            {validationErrors.confirmPassword}
                          </div>
                        )}
                        {err && <div className="error-msg">{err}</div>}
                      </div>
                    </div>
                    {/* </div> */}

                    <div className="spform-outline-3">
                      <button
                        type="submit"
                        className="spbtn"
                        onClick={handleClick}
                      >
                        SIGNUP
                      </button>
                    </div>

                    <div className="sptext-left">
                      <p
                        className="spsub"
                        style={{
                          fontFamily: "'Familjen Grotesk', sans-serif",
                          color: "#9B9A9A",
                        }}
                      >
                        Already registered?{" "}
                        <a href="/login" className="fw-bold">
                          Login
                        </a>
                      </p>
                      {/* <p className="spsub">
                        <a
                          href="/signup"
                          className="fw-bold"
                        >
                          Register as a traveler
                        </a>
                      </p> */}
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
        {/* <ToastContainer position="top-center" autoClose={6000} /> */}
      </div>
      <ToastContainer position="top-center" autoClose={6000} />
    </section>
  );
};

export default SignupSP;
