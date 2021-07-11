import React from "react"
import "./style.css"
import support from "./support.jpg"
import twitter from "./twitter.jpg"

export const Info = () => {
  return (
    <div id="info" className="col-xs-12">
      <div className="left">
        <div className="title">
          Twitter Bot
          <div className="header">
            <a href="https://twitter.com/destinyinsights"><img src={twitter} className={"image"} alt="logo" /></a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="title">
          Support
          <div className="header">
            <a href="https://www.buymeacoffee.com/cujarrett"><img src={support} className={"image"} alt="logo" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
