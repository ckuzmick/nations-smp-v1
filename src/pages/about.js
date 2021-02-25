import React from "react"
import NavBar from "../components/layout/nav-bar.js"
import "@fontsource/montserrat"
import "@fontsource/open-sans"
import { link } from "gatsby"

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
      fontFamily: "Open Sans",
      fontSize: "20px"
    }}
    
    >We are a group of friends who play on a seudo-factions server called Nations SMP. There are countries, wars, builds, and lots of fun! If you would like to know more about how the server works exactly you should go to our Laws & Rules page!</p>
    <h1 style={{
      fontFamily: "Montserrat"
    }}
    >Here are our youtube channels!</h1>

    <a href="https://www.youtube.com/channel/UCydKVYuJdCjh49fF3wORIew" style={{ fontFamily: "Montserrat", fontSize: "25px", textDecoration: "none"}}>Conrad</a>
    <br />
    <a href="https://youtube.com/channel/UCTXFov7TGtTV4gxOwIUn0OA" style={{ fontFamily: "Montserrat", fontSize: "25px", textDecoration: "none"}}>CaptainPizza</a>
    <br />
    <a href="https://www.youtube.com/channel/UCDgfCToFkxIXfplarUVLH2Q" style={{ fontFamily: "Montserrat", fontSize: "25px", textDecoration: "none"}}>RainbowDemon (art focused)</a>

  </div>
)

export default About
