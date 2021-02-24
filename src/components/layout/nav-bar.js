import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavBar = () => (
  <div>
    <ul 
        style={{
            listStyleType: "none",
            margin: "-1em",
            padding: "0",
            display: "inline"
        }}
    >
        <li style={{display: "inline", padding: "1em"}}><AniLink bg="#001122" to="/laws-and-rules/">Laws & Rules</AniLink></li>
        <li style={{display: "inline", padding: "1em"}}><AniLink bg="green" to="/">Home</AniLink></li>
        <li style={{display: "inline", padding: "1em"}}><AniLink bg="blue" to="/component-test-001/">Component Test</AniLink></li>
        <li style={{display: "inline", padding: "1em"}}><AniLink bg="blue" to="/about/">About Us</AniLink></li>

    </ul>
  </div>
)

export default NavBar
