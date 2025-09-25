import React, { useState } from "react";
import styles from "./forgetpassword.module.css";
import API from "../../api"; // axios instance
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Loader state

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email is required", { position: "top-right" });

    setLoading(true); // Start loader
    try {
      const res = await API.post("/forgot-password", { email });

      toast.success(res.data.message, { position: "top-right", autoClose: 3000 });
      setEmail(""); // Clear input
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Error sending email",
        { position: "top-right", autoClose: 3000 }
      );
    } finally {
      setLoading(false); // Stop loader
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
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading} // Disable while loading
              >
                {loading ? <span className={styles.loader}></span> : "Send Reset Link"}
              </button>
            </div>
          </form>
          <Link to="/login" className={styles.linkBtn}>Back to Login</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
