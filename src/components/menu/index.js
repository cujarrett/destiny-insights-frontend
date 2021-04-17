import React from "react"
import "./style.css"

export const Menu = () => {
  let leftStyling = "left"
  let rightStyling = "right"
  if (document.documentElement.clientWidth < 400) {
    leftStyling = "left-small-display"
    rightStyling = "right-small-display"
  }

  return (
    <div>
      <div className="menu">
        <div className={leftStyling}>
          <a href="#about">About</a>
        </div>
        <div className="middle">
          <a href="#twitter-bot">Twitter Bot</a>
        </div>
        <div className={rightStyling}>
          <a href="#support">Support</a>
        </div>
      </div>
      <div className="hr"/>
    </div>
  )
}
