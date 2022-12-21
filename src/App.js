import React, { useState, useEffect } from "react"
import { Cards } from "./components/cards/index.js"
import { Footer } from "./components/footer/index.js"
import { Header } from "./components/header/index.js"
import { Info } from "./components/info/index.js"
import { Search } from "./components/search/index.js"
import "./App.css"

import { getCardData, getModData } from "./integrations/destiny-insights.js"

const App = () => {
  const [cardData, setCardData] = useState([])
  const [searchTerms, setSearchTerms] = useState("")

  useEffect(() => {
    const getCards = async () => {
      const modData = await getModData()
      const modCardData = getCardData(modData)
      setCardData(modCardData)
    }
    getCards()
  }, [])

  return (
    <div className="App">
      <Header />
      <Search setSearchTerms={setSearchTerms} />
      <Cards cardData={cardData} searchTerms={searchTerms} />
      <Info />
      <Footer />
    </div>
  )
}

export default App
