import React from 'react'

export default function Edit(props) {
  return (
    <div>
        <h1>Editing Captain's Log: {props.log.title}</h1>
        <form action={`/logs/${props.log._id}?_method=PUT`} method='POST'>
            Title: <input type="text" name="title" defaultValue={props.log.title}/> <br />
            Log Entry: <textarea name="entry" defaultValue={props.log.entry} /> <br />
            Ship Status: {!props.log.shipIsBroken ? <input type="checkbox" name="shipIsBroken" /> : <input type="checkbox" name="shipIsBroken" defaultChecked />} <br />
            <input type="submit" value="Log Report" />
        </form>
    </div>
  )
}