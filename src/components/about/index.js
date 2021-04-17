import React from "react"
import "./style.css"

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="title">
        About
      </div>
      <div className="info">
        This data represents the past one year of mods sold in Destiny 2 by the vendor Banshee-44.
        It is built with JavaScript and powered by AWS. Created by <a href="https://twitter.com/cujarrett">@cujarrett</a>.
      </div>
      <div className="title">
        Discord & Feedback
      </div>
      <div className="info">
        <a href="https://discord.gg/SaXkd392vZ">Our Discord is open for feedback on the bot and web app.</a>
      </div>
    </div>
  )
}
