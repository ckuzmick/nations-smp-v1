import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/layout/nav-bar.js"
import "@fontsource/montserrat"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <div style={{
    margin: "30px",
  }}
  
  >
    <Helmet title="Home | Nations SMP"></Helmet>
    <NavBar />
    <br />
    <br />
    <img src="/nations-logo.png" style={{

      width: "700px"

    }}></img>
    <p style={{

      fontFamily: "Montserrat",
      fontSize: "25px"

    }}>This is the website for the nations SMP!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45em` }}>
    </div>
  </div>
)

export default IndexPage
