import React from 'react'

export default function New() {
  return (
    <div>
        <form action="/logs" method="POST">
            Title: <input type="text" name="title" /> <br />
            Log Entry: <textarea name="entry" defaultValue={`Begin Captain's log`} /> <br />
            Ship Status: <input type="checkbox" name="shipIsBroken" /> <br />
            <input type="submit" value="Log Report" />
        </form>
    </div>
  )
}
