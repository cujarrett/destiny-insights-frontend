import React from "react"
import "./style.css"

export const Footer = () => {
  return (
    <div className="footer" data-testid="footer">
      <h4>
        Made by{" "}
        <a href="https://cujarrett.dev">
          @cujarrett
        </a>{" "}
        with <i className="fa fa-heart" /> and JavaScript
      </h4>
    </div>
  )
}
