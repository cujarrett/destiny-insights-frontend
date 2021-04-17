import React, { useState, useEffect } from "react"
import { About } from "./components/about/index.js"
import { Cards } from "./components/cards/index.js"
import { Footer } from "./components/footer/index.js"
import { Header } from "./components/header/index.js"
import { Info } from "./components/info/index.js"
import { Menu } from "./components/menu/index.js"
import { Search } from "./components/search/index.js"
import { Support } from "./components/support/index.js"
import { Timeline } from "./components/timeline/index.js"
import { TwitterBot } from "./components/twitter-bot/index.js"
import "./App.css"

import { getCardData, getModData, getTimelineData, getTypeData } from "./integrations/banshee-44-mods.js"

const App = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [timelineData, setTimelineData] = useState([])
  const [cardData, setCardData] = useState([])
  const [modTypeData, setModTypeData] = useState([])
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
    const timelineChartData = getTimelineData(modData)
    setTimelineData(timelineChartData)
    const modCardData = getCardData(modData)
    setCardData(modCardData)
    const typeData = getTypeData(modData)
    setModTypeData(typeData)
  }, [])

  return (
    <div className="App">
      <Header />
      <Menu />
      <Info armorMods={modTypeData.armorMods} weaponMods={modTypeData.weaponMods}/>
      <Timeline width={width} height={height} timelineData={timelineData}/>
      <Search setSearchTerms={setSearchTerms}/>
      <Cards cardData={cardData} searchTerms={searchTerms}/>
      <About />
      <TwitterBot />
      <Support />
      <Footer />
    </div>
  )
}

export default App
