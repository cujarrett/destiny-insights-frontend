import React from "react"
import "./style.css"
import logo from "./logo.png"

export const Header = () => {
  let logoStyling = "header-logo"
  if (document.documentElement.clientWidth < 400) {
    logoStyling = "header-logo-small-display"
  }

  return (
    <div data-testid="header" className="header">
      <a href="https://banshee44mods.com"><img src={logo} className={logoStyling} alt="logo" /></a>
    </div>
  )
}
