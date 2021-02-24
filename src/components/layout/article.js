import React from "react"
import "@fontsource/crimson-text"

const a = (props) => (

      <h1 style={{
          fontFamily: "Crimson Text",
          fontSize: "150px",
          letterSpacing: "13px",
          lineHeight: ".1"
      }}
      >
          {props.children}
      </h1>

  )
  
  export default a