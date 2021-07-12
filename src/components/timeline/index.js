import React from "react"
import PropTypes from "prop-types"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import "./style.css"

export const Timeline = (props) => {
  return (
    <div className="timeline">
      <div className="title">
        Charged with Light mod sales for last year
      </div>
      <BarChart
        width={props.width * .95}
        height={props.height * .25}
        data={props.chargedWithLightModTimelineData}
        margin={{ top: 10, right: 50, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="0" stroke="#33363f"/>
        <Tooltip contentStyle={{ backgroundColor: "#171f29", color: "#9799a0" }} />
        <Bar
          type="monotone"
          dataKey="timesSold"
          name="Times Sold"
          label="Times Sold"
          stackId="1"
          stroke="#ff8f00"
          fill="#ff8f00" />
      </BarChart>

      <div className="title">
        Warmind Cell mod sales for last year
      </div>
      <BarChart
        width={props.width * .95}
        height={props.height * .25}
        data={props.warmindCellModTimelineData}
        margin={{ top: 10, right: 50, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="0" stroke="#33363f"/>
        <Tooltip contentStyle={{ backgroundColor: "#171f29", color: "#9799a0" }} />
        <Bar
          type="monotone"
          dataKey="timesSold"
          name="Times Sold"
          stackId="1"
          stroke="#d84315"
          fill="#d84315" />
      </BarChart>
    </div>
  )
}

Timeline.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  chargedWithLightModTimelineData: PropTypes.array,
  warmindCellModTimelineData: PropTypes.array
}
