import React from "react"
import "@fontsource/benne"

const t = (props) => (

      <h1 style={{
          fontFamily: "Benne",
          fontSize: "25px",
          letterSpacing: "2px",
          lineHeight: "1.1"
      }}
      >
          {props.children}
      </h1>

  )
  
  export default t