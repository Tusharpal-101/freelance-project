import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './component/Navbar';
import SocialSidebar from './component/pages/SocialSidebar';
import Rainanimation from './component/pages/Rainanimation';
import Fotter from './component/fotter/Fotter';
import ScrollToTop from './component/pages/ScrollToTop.jsx';

// Page components
import Home from './component/pages/Home';
import Contact from './component/contact/Contact';
import About from './component/about/About';
import SearchCategories from './component/SearchCategories';
import Login from './component/login/Login.jsx';
import Signup from './component/signup/Signup.jsx';
import Card from './component/pages/card/Card';
import PrivacyPolicy from './component/privacypolicy/PrivacyPolicy.jsx';
import ResetPassword from './component/resetpassword/ResetPassword.js';
import ForgotPassword from './component/forgetpassword/ForgotPassword.js';
import Document from './component/documentation/Document.js';

function App() {
  const location = useLocation();

  // Pages jahan sidebar hide karna
  const hideSidebarPages = ["/doc", "/login", "/signup"];

  return (
    <>
      {/* Ye sab har page par dikhega */}
      <Rainanimation />
      <Navbar />
      <ScrollToTop />

      {/* SocialSidebar sirf un pages par dikhega jo hideSidebarPages me nahi */}
      {!hideSidebarPages.includes(location.pathname) && <SocialSidebar />}

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
        <Route path="/doc" element={<Document />} />
      </Routes>

      {/* Footer har page par */}
      <Fotter />
    </>
  );
}

export default App;
