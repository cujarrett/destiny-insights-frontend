import React from "react"
import "./style.css"
import { version } from "../../../package.json"

export const Footer = () => {
  return (
    <div className="footer" data-testid="footer">
      <div className="tool-tip">
        <h4>
          Made with <i className="fa fa-heart"/>, JavaScript, and <i className="fa fa-github"/>
        </h4>
        <span className="tool-tip-text">{version}</span>
      </div>
    </div>
  )
}
