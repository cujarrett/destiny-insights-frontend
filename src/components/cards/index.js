import React from "react"
import Grid from "@material-ui/core/Grid"
import PropTypes from "prop-types"
import ModCard from "./card.js"

export const Cards = ({ cardData, searchTerms }) => {
  const getTypeColor = (type) => {
    const knownModTypes = ["Weapon Mod", "Armor Mod", "Charged with Light Mod", "Warmind Cell Mod"]
    if (knownModTypes.includes(type)) {
      return type.replaceAll(" ", "-").toLowerCase()
    } else {
      return "unknown-type"
    }
  }

  let cardDataToShow = []
  const emptySearch = searchTerms === ""
  for (const mod of cardData) {
    const nameMatch = mod.name.toLowerCase().includes(searchTerms.toLowerCase())
    const typeMatch = mod.type.toLowerCase().includes(searchTerms.toLowerCase())
    if (emptySearch || nameMatch || typeMatch) {
      cardDataToShow.push(mod)
    }
  }
  if (emptySearch) {
    cardDataToShow = cardDataToShow.splice(0, 9)
  }

  return (
    <div className="container">
      <div className="title">
        Mod info for last year
      </div>
      <Grid
        container
        spacing={5}
        style={{ padding: "24px" }}
      >
        {cardDataToShow.map((card) =>
          <Grid
            key={card.name}
            item
            xs={12} sm={6} md={4} lg={4} xl={3}
          >
            <ModCard
              icon={card.icon}
              name={card.name}
              type={card.type}
              typeColor={getTypeColor(card.type)}
              description={card.description}
              timesSold={card.timesSold}
              lastSold={card.lastSold}
            />
          </Grid>
        )}
      </Grid>
    </div>
  )
}

Cards.propTypes = {
  cardData: PropTypes.array,
  searchTerms: PropTypes.string
}
