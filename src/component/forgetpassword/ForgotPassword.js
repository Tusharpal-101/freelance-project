import React, { useState } from "react";
import styles from "./forgetpassword.module.css";
import API from "../../api"; // axios instance
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email is required", { position: "top-right" });

    try {
      // Backend call
      const res = await API.post("/forgot-password", { email });

      // Success toast
      toast.success(res.data.message, { position: "top-right", autoClose: 3000 });
      setEmail(""); // Clear input
    } catch (err) {
      // Error toast
      toast.error(
        err.response?.data?.message || "Error sending email",
        { position: "top-right", autoClose: 3000 }
      );
    }
  };

  return (
    <div className={styles.centerPage}>
      <div className={styles.ring}>
        <i style={{ "--clr": "#ec4899" }}></i>
        <i style={{ "--clr": "#8b5cf6" }}></i>
        <i style={{ "--clr": "#3b82f6" }}></i>

        <div className={styles.login}>
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputBx}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBx}>
              <input type="submit" value="Send Reset Link" />
            </div>
          </form>
          <Link to="/login" className={styles.linkBtn}>Back to Login</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
