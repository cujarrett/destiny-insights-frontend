import React from "react"
import PropTypes from "prop-types"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import "./style.css"

export const Timeline = (props) => {
  return (
    <div className="timeline">
      <BarChart
        width={props.width * .95}
        height={props.height * .5}
        data={props.timelineData}
        margin={{ top: 10, right: 50, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="0" stroke="#33363f"/>
        <Tooltip contentStyle={{ backgroundColor: "#171f29", color: "#9799a0" }} />
        <Legend/>
        <Bar type="monotone" dataKey="Weapon Mod" stackId="1" stroke="#283593" fill="#283593" />
        <Bar type="monotone" dataKey="Armor Mod" stackId="1" stroke="#6a1b9a" fill="#6a1b9a" />
        <Bar type="monotone" dataKey="Warmind Cell Mod" stackId="1" stroke="#d84315" fill="#d84315" />
        <Bar type="monotone" dataKey="Charged with Light Mod" stackId="1" stroke="#ff8f00" fill="#ff8f00" />
      </BarChart>
    </div>
  )
}

Timeline.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  timelineData: PropTypes.array
}
