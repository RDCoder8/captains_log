import React from "react"

export default function Show(props) {
    const {title, entry, shipIsBroken, createdAt} = props.log
  return (
    <div>
        <h1>{title}</h1>
        <h3>Time: {`${createdAt}`}</h3>
        <h3>Ship status: {shipIsBroken ? "In need of repairs" : "All systems operational."}</h3>
        <h3><u>Captain's Entry:</u></h3>
        <p>{entry}</p>
        <a href="/logs">Back to logs</a>
    </div>
  )
}


