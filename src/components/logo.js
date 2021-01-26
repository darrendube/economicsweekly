import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ThemeChanger from "./themeChanger"





const LogoWrap = styled.div`

  margin: auto 0;
  flex: 0 1 36px;
  padding: auto auto;
  @media (max-width= 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }


  




`

const Logo = () => {
  return (
    <LogoWrap className="logo-link" as={Link} to="/">
      <img src="/logo/logo.png" className="logoimg"/>
      {/*<p className="logo-text"> DARREN<span className="logo-text-2">DUBE</span></p>*/}
      
    </LogoWrap>
    
  )
}

export default Logo