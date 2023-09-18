import { useState, useEffect } from "react";
import "./resetpw.scss";
// import img1 from '../../images/img1.jpg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPW = () => {
  const [inputs, setInputs] = useState({
    password: "",
    confirmPassword: "",
  });

  const link = useLocation().search;
  console.log(link);

  const [resetResult, setResetResult] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleResetPassword = async () => {
    if (inputs.password !== inputs.confirmPassword) {
      setResetResult("Passwords do not match.");
      return;
    }

    if (!validatePassword(inputs.password)) {
      setResetResult(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/server/users/resetpw",
        {
          resetLink: link,
          password: inputs.password,
        }
      );

      if (response.status === 200) {
        setResetResult("Password reset successfully!");
        navigate(`/login`);
      } else {
        setResetResult("Failed to reset password. Please try again.1");
      }
    } catch (err) {
      setResetResult("Failed to reset password. Please try again.2");
    }
  };

  return (
    <section className="containerr">
      <div className="titler">Reset Password</div>
      <div className="inputr">
        <div className="row-titler">
          Enter new password
          <br />
          <br />
          <input
            type="password"
            name="password"
            className="form-inputr"
            onChange={handleChange}
          />
        </div>
        <div className="row-titler">
          Re-enter new password
          <br />
          <br />
          <input
            type="password"
            name="confirmPassword"
            className="form-inputr"
            onChange={handleChange}
          />
        </div>
        <div className="btnr">
          <button
            type="button"
            className="buttonr"
            onClick={handleResetPassword}
          >
            Reset
          </button>
        </div>
        {resetResult && <p>{resetResult}</p>}
      </div>
    </section>
  );
};

export default ResetPW;