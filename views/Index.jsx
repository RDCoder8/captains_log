import React from 'react'

export default function Index(props) {
    const logs = props.logs
  return (
    <div><h1>Captain's Logs</h1>
    <a href="/logs/new">Create new log</a>
    <ul>
        {logs.map((log, i) => {
            return (
                <li key={i}>{log.title}</li>
            )
        })}
    </ul>
    </div>
  )
}
