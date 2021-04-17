import React from "react"
import PropTypes from "prop-types"
import "./style.css"

export const Info = ({ armorMods, weaponMods }) => {
  return (
    <div className="container">
      <div className="context">
        Mod Data For Last Year
      </div>
      <div className="content">
        <div className="left">
          <div className="mod-count">{ weaponMods }</div>
          <div className="mod-type-description">
            Weapon mods sold
          </div>
        </div>
        <div className="right">
          <div className="mod-count">{ armorMods }</div>
          <div className="mod-type-description">
            Armor mods sold
          </div>
        </div>
      </div>
    </div>
  )
}

Info.propTypes = {
  armorMods: PropTypes.number,
  weaponMods: PropTypes.number
}
