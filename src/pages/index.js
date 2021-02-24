import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/layout/nav-bar.js"

const IndexPage = () => (
  <div style={{
    margin: "30px",
  }}
  
  >
    <NavBar />
    <img src=".../nations-logo"></img>
    <h1>Nations SMP</h1>
    <p>This is the website for the nations smp!</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/laws-and-rules/">Go to Laws & Rules</Link> <br />
  </div>
)

export default IndexPage
