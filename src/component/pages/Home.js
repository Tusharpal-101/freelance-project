import React from 'react'

import Banner from "../Banner"
import SearchCategories from '../SearchCategories'
import CardSection from "../cardsection/Cardsection" 
import Simplecard from "../simplecard/Simplecard" // fixed import
import SocialSidebar from './SocialSidebar'
import Contact from "../contact/Contact"
import About from '../about/About'
import ShaderCanvas from "../shadecanvas/ShaderCanvas"
import Card from "./card/Card.js"
// import Login from '../login/Login.jsx'
import Faq from "../faq/Faq.jsx"
import ResetPassword from '../resetpassword/ResetPassword.js'
import ForgotPassword from '../forgetpassword/ForgotPassword.js'
// import PrivacyPolicy from '../privacypolicy/PrivacyPolicy.jsx'
import Document from "../documentation/Document"
const Home = () => {
  return (
    <>
      <Banner />
       <SearchCategories />
        <Simplecard/> 
      <CardSection /> 
      <SocialSidebar/> 
      <Faq/>
      {/* <PrivacyPolicy/> */}
      <Document/>
      <About/>
      <ShaderCanvas/> 
     
      {/* <Login/>  */}
      {/* <Contact/>
       {/* matches import */}
    </>
  )
}

export default Home
