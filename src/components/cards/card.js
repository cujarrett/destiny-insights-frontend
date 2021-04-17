import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import "./style.css"

export default function ModCard({ icon, name, type, typeColor, description, timesSold, lastSold }) {
  return (
    <div className="card">
      <Card>
        <CardContent>
          <div className="icon">
            <img src={icon}></img>
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            <div className="title">
              {name}
            </div>
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            <div className={typeColor}>
              {type}
            </div>
          </Typography>
          <Typography className="description" variant="body2" component="p">
            {description}
          </Typography>
          <div className="sale-details">
            <div className="times-sold">
              <div className="times-sold">
                Times Sold: {timesSold}
              </div>
            </div>
            <div className="last-sold">
              <div className="last-sold">
                Last: {lastSold}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

ModCard.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  typeColor: PropTypes.string,
  description: PropTypes.string,
  timesSold: PropTypes.number,
  lastSold: PropTypes.string
}
