import React from "react"
import "./index.css"
import App from "./App"
import reportWebVitals from "./report-web-vitals.js"
import "font-awesome/css/font-awesome.min.css"

import { createRoot } from "react-dom/client"
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App tab="home" />)

reportWebVitals()
