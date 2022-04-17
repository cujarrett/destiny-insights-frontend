import React from "react"
import "./style.css"
import discord from "./discord.jpg"
import support from "./support.jpg"
import twitter from "./twitter.jpg"

export const Info = () => {
  return (
    <div className="info">
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
      <div className="left">
        <div className="title">
          Discord
          <div className="header">
            <a href="https://discord.gg/jAA5U52"><img src={discord} className={"image"} alt="logo" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
