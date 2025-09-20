import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api"; // axios instance
import { AuthContext } from "../../contextapi/AuthContext"; // AuthContext
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // get login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login", { email, password });
      console.log(res.data);

      const { token, user } = res.data;

      // Update AuthContext
      login(user, token);

      // ✅ Show success toast
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Redirect after toast
      setTimeout(() => navigate("/"), 1500);

    } catch (err) {
      console.error(err);

      // ✅ Show error toast
      toast.error(err.response?.data?.message || "Login failed", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className={styles.centerPage}>
      <div className={styles.ring}>
        <i style={{ "--clr": "#ec4899" }}></i>
        <i style={{ "--clr": "#8b5cf6" }}></i>
        <i style={{ "--clr": "#3b82f6" }}></i>

        <div className={styles.login}>
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.inputBx}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputBx}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputBx}>
              <input type="submit" value="Sign in" />
            </div>
          </form>

          <div className={styles.links}>
            <Link to="/forget-password">forget password</Link>
            <Link to="/signup" className={styles.linkBtn}>
              Signup
            </Link>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
