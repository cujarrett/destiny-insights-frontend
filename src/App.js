import React, { useState, useEffect } from "react"
import { Cards } from "./components/cards/index.js"
import { Footer } from "./components/footer/index.js"
import { Header } from "./components/header/index.js"
import { Info } from "./components/info/index.js"
import { Search } from "./components/search/index.js"
import { Timeline } from "./components/timeline/index.js"
import "./App.css"

// eslint-disable-next-line max-len
import { getCardData, getModData, getChargedWithLightModTimelineData, getWarmindCellModTimelineData } from "./integrations/destiny-insights.js"

const App = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [chargedWithLightModTimelineData, setChargedWithLightModTimelineData] = useState([])
  const [warmindCellModTimelineData, setWarmindCellModTimelineData] = useState([])
  const [cardData, setCardData] = useState([])
  const [searchTerms, setSearchTerms] = useState("")

  const handleWidthResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    window.addEventListener("resize", handleWidthResize)
    return () => {
      window.removeEventListener("resize", handleWidthResize)
    }
  }, [])

  useEffect(async () => {
    const modData = await getModData()
    const chargedWithLightChartData = getChargedWithLightModTimelineData(modData)
    setChargedWithLightModTimelineData(chargedWithLightChartData)
    const warmindCellChartData = getWarmindCellModTimelineData(modData)
    setWarmindCellModTimelineData(warmindCellChartData)
    const modCardData = getCardData(modData)
    setCardData(modCardData)
  }, [])

  return (
    <div className="App">
      <Header />
      <Timeline
        width={width}
        height={height}
        chargedWithLightModTimelineData={chargedWithLightModTimelineData}
        warmindCellModTimelineData={warmindCellModTimelineData} />
      <Search setSearchTerms={setSearchTerms} />
      <Cards cardData={cardData} searchTerms={searchTerms} />
      <Info />
      <Footer />
    </div>
  )
}

export default App
