import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom"; // ✅ sirf ye rakho

import SearchCategories from './component/SearchCategories';
import Home from './component/pages/Home';
import Rainanimation from "../src/component/pages/Rainanimation";
import Contact from './component/contact/Contact';
import About from './component/about/About';
import Fotter from "./component/fotter/Fotter";
import SocialSidebar from './component/pages/SocialSidebar';
import Login from './component/login/Login.jsx';
import Signup from './component/signup/Signup.jsx';
import Card from "../src/component/pages/card/Card";
import PrivacyPolicy from './component/privacypolicy/PrivacyPolicy.jsx';
import ScrollToTop from '../src/component/pages/ScrollToTop.jsx';
import ResetPassword from './component/resetpassword/ResetPassword.js';
import ForgotPassword from './component/forgetpassword/ForgotPassword.js';

function App() {
  return (
    <>
      <Rainanimation />
      <ScrollToTop />
      <Navbar />
      <SocialSidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<SearchCategories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:name" element={<Card />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/card" element={<Card />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
      </Routes>

      <Fotter />
    </>
  );
}

export default App;
