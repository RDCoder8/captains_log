import React from "react";

export default function Index(props) {
  const logs = props.logs;
  return (
    <div>
      <h1>Captain's Logs</h1>
      <a href="/logs/new">Create new log</a>
      <ul>
        {logs.map((log, i) => {
          return (
            <li key={i}>
              {log.title} <a href={`/logs/${log._id}`}>View Log</a> {" "}
              <a href={`/logs/${log._id}/edit`}>Edit Log</a> <br /> <br /> {" "}
              <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`DELETE ${log.title.toUpperCase()}`} /> 
              </form>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
