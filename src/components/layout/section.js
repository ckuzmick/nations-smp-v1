import React from "react"
import "@fontsource/crimson-text"

const a = (props) => (

      <h1 style={{
          fontFamily: "Crimson Text",
          fontSize: "40px",
          letterSpacing: "3px"
      }}
      >
          {props.children}
      </h1>

  )
  
  export default a