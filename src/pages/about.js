import React from "react"
import NavBar from "../components/layout/nav-bar.js"
import "@fontsource/montserrat"

const About = () => (
  <div style={{
    margin: "30px",
  }}
  >
      <NavBar />
    <h1 style={{
      fontFamily: "Montserrat",
    }}    
    >About Us</h1>
    <p style={{
      fontFamily: "Montserrat",
      fontSize: "20px"
    }}
    
    >We are a group of friends who play on a seudo-factions server called Nations SMP. There are countries, wars, builds, and lots of fun! If you would like to know more about how the server works exactly you should go to our Laws & Rules page!</p>
    <h2 style={{
      fontFamily: "Montserrat"
    }}
    >Here are our youtube channels!</h2>
  </div>
)

export default About
